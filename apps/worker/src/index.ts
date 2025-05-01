import amqplib from "amqplib"
import { PrismaClient } from "@prisma/client"
import Ajv, { type JTDDataType } from "ajv/dist/jtd"
import Pusher from "pusher"

import QRCodeEventSchema from "./schemas/qrcode-event.json"
import ConnectionUpdatedSchema from "./schemas/connection-update-event.json"
import { RedisClient } from "bun"

const redis = new RedisClient(process.env.REDIS_URL ?? "redis://localhost:6379")

const pusher = new Pusher({
  host: "localhost",
  port: "6001",
  useTLS: false,
  cluster: "mt1",
  appId: "default",
  key: "default",
  secret: "secret"
})

const ajv = new Ajv()

const prisma = new PrismaClient()

await prisma.$connect()

const ampqClient = await amqplib.connect("amqp://user:password@localhost:5672")
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
