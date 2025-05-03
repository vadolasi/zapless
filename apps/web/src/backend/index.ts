import { Elysia, t } from "elysia"
import createClient from "openapi-fetch"
import type { paths } from "./evolution"
import { cors } from "@elysiajs/cors";
import { auth, authMiddleware } from "./auth";
import db from "./database";
import { instancesTable } from "./database/schema";
import env from "./env";
import { serverTiming } from '@elysiajs/server-timing'
import Pusher from "pusher"
import prisma from "@/lib/prisma"

const pusher = new Pusher({
  host: "localhost",
  port: "6001",
  useTLS: false,
  cluster: "mt1",
  appId: "default",
  key: "default",
  secret: "default"
})

const client = createClient<paths>({ baseUrl: "http://localhost:8080" })
client.use({
  onRequest: async ({ request }) => {
    request.headers.set("apikey", env.EVOLUTION_API_KEY)

    return request
  }
})

const app = new Elysia({ prefix: "/api" })
  .use(serverTiming())
  .use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true
    })
  )
  .mount(auth.handler)
  .use(authMiddleware)
  .post("/pusher-auth", ({ user, body: { socket_id } }) => {
    return pusher.authenticateUser(socket_id, { id: user.id })
  }, { body: t.Object({ socket_id: t.String() }), auth: true })
  .post("/pusher-auth-channel", ({ user, body: { socket_id, channel_name }, status }) => {
    if (!channel_name.startsWith("private-instance.")) {
      return status(403, { error: "Invalid channel name" })
    }

    const [, instanceId] = channel_name.split(".")
    const instance = db.query.instancesTable.findFirst({
      where: (instances, { eq, and }) => and(eq(instances.id, instanceId), eq(instances.userId, user.id))
    })

    if (!instance) {
      return status(403, { error: "Instance not found" })
    }

    return pusher.authorizeChannel(socket_id, channel_name)
  }, { body: t.Object({ socket_id: t.String(), channel_name: t.String() }), auth: true })
	.group("/instances", (app) =>
    app.get("/", async ({ user }) => {
      const instances = await db.query.instancesTable.findMany({
        where: (instances, { eq }) => eq(instances.userId, user.id)
      })

      if (!instances) {
        return { error: "No instances found" }
      }

      return { instances }
    }, { auth: true })
    .group("/:instanceId", { params: t.Object({ instanceId: t.String() }) }, (app) =>
      app.get("/", async ({ user, params: { instanceId } }) => {
        const instance = await db.query.instancesTable.findFirst({
          where: (instances, { eq, and }) => and(eq(instances.id, instanceId), eq(instances.userId, user.id)),
          columns: { id: true }
        })

        if (!instance) {
          return { error: "Instance not found" }
        }

        const instanceData = await prisma.instance.findFirst({
          where: {
            name: instance.id
          },
          select: {
            connectionStatus: true
          }
        })

        if (!instanceData) {
          return { error: "Instance not found" }
        }

        return {
          id: instance.id,
          status: instanceData.connectionStatus,
          qrcode: await Bun.redis.get(`qrcode:${instance.id}`)
        }
      }, { auth: true })
      .group("/labels", (app) =>
        app.get("/", async ({ user, params: { instanceId }, status }) => {
          const instance = await db.query.instancesTable.findFirst({
            where: (instances, { eq, and }) => and(eq(instances.id, instanceId), eq(instances.userId, user.id)),
            columns: { id: true }
          })
          if (!instance) {
            return status(404, { error: "Instance not found" })
          }

          const labels = await prisma.label.findMany({
            where: {
              Instance: {
                name: instance.id
              }
            }
          })

          return labels.map((label) => ({
            id: label.id,
            name: label.name,
            color: label.color
          }))
        }, { auth: true })
        .get("/:labelId", async ({ user, params: { instanceId, labelId }, status }) => {
          const instance = await db.query.instancesTable.findFirst({
            where: (instances, { eq, and }) => and(eq(instances.id, instanceId), eq(instances.userId, user.id)),
            columns: { id: true }
          })

          if (!instance) {
            return status(404, { error: "Instance not found" })
          }

          const label = await prisma.label.findFirst({
            where: {
              id: labelId,
              Instance: {
                name: instance.id
              }
            },
            select: {
              labelId: true,
            }
          })

          if (!label) {
            return status(404, { error: "Label not found" })
          }

          const chats = await prisma.chat.findMany({
            where: {
              Instance: {
                name: instance.id
              },
              labels: {
                array_contains: [label.labelId]
              }
            },
            select: {
              id: true,
              name: true
            }
          })

          return chats.map((chat) => ({
            id: chat.id,
            name: chat.name
          }))
        }, { auth: true, params: t.Object({ instanceId: t.String(), labelId: t.String() }) })
      )
    )
		.post("/", async ({ user }) => {
      const instanceId = Bun.randomUUIDv7()
  
      const [{ data }] = await Promise.all([
        client.request("post", "/instance/create", {
          body: {
            instanceName: instanceId,
            integration: "WHATSAPP-BAILEYS",
            syncFullHistory: true,
            token: env.EVOLUTION_API_KEY,
            qrcode: true
          }
        }),
        db.insert(instancesTable).values({
          id: instanceId,
          userId: user.id
        })
      ])

      await Bun.redis.set(`qrcode:${instanceId}`, (data as any).qrcode.base64)

			return { instanceId }
		}, { auth: true })
	)
  .group("/whatsapp/:instanceId", { params: t.Object({ instanceId: t.String() }) }, (app) =>
    app.group("/send-message", (app) =>
      app.post("/text", async ({ params: { instanceId }, body: { to, text } }) => {
        const { data } = await client.request("post", "/message/sendText/{instance}", {
          params: {
            path: {
              instance: instanceId
            }
          },
          body: {
            number: to,
            text
          }
        })

        if (!data || !data.status) {
          return { error: "Failed to send message" }
        }

        return { status: data.status }
      }, { body: t.Object({ to: t.String(), text: t.String() }), auth: true })
    )
  )

export default app
export type App = typeof app
