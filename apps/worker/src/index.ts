import amqplib from "amqplib"
import { PrismaClient } from "@prisma/client"
import Ajv, { type JTDDataType } from "ajv/dist/jtd"
import Pusher from "pusher"

import QRCodeEventSchema from "./schemas/qrcode-event.json"
import ConnectionUpdatedSchema from "./schemas/connection-update-event.json"
import { RedisClient } from "bun"

const redis = new RedisClient(process.env.REDIS_URL!)

const pusher = new Pusher({
  host: process.env.SOKETI_HOST!,
  port: process.env.SOKETI_PORT!,
  useTLS: false,
  cluster: "mt1",
  appId: process.env.SOKETI_APP_ID!,
  key: process.env.SOKETI_APP_KEY!,
  secret: process.env.SOKETI_APP_SECRET!
})

const ajv = new Ajv()

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_CONNECTION_URI
})

await prisma.$connect()

const ampqClient = await amqplib.connect(process.env.RABBITMQ_URL!)
const channel = await ampqClient.createChannel()

const parseQRCodeData = ajv.compileParser<JTDDataType<typeof QRCodeEventSchema>>(QRCodeEventSchema)
const parseConnectionUpdateData = ajv.compileParser<JTDDataType<typeof ConnectionUpdatedSchema>>(ConnectionUpdatedSchema)

await channel.consume("connection.update", async (msg) => {
  if (!msg) return

  const data = parseConnectionUpdateData(msg.content.toString())

  if (!data) return

  console.log(`Connection update on instance.${data.instance}: ${data.data.state}`)

  await pusher.trigger(`instance.${data.instance}`, "connection.update", data.data)
})

await channel.consume("qrcode.updated", async (msg) => {
  if (!msg) return

  const data = parseQRCodeData(msg.content.toString())

  if (!data) return

  console.log(`qrcode for instance.${data.instance}`)

  await pusher.trigger(`instance.${data.instance}`, "qrcode.updated", data.data.qrcode.base64)
  await redis.set(`qrcode:${data.instance}`, data.data.qrcode.base64 as string, "EX", 60 * 60 * 5)

  channel.ack(msg)
})
