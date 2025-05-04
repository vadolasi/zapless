"use client"

import Link from "@/app/components/link";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";

const Instance: React.FC<Readonly<{ instanceId: string, status: "close" | "connecting" | "open", qrcode: string | null }>> = ({ instanceId, status: savedStatus, qrcode: savedQrcde }) => {
  const [status, setStatus] = useState<"close" | "connecting" | "open">(savedStatus)
  const [qrcode, setQrcode] = useState<string | null>(savedQrcde ?? null)

  useEffect(() => {
    const pusher = new Pusher("default", {
      wsHost: process.env.NEXT_PUBLIC_PUSHER_HOST ?? "localhost",
      wsPort: Number(process.env.NEXT_PUBLIC_PUSHER_PORT ?? "6001"),
      forceTLS: false,
      disableStats: true,
      enabledTransports: ["ws", "wss"],
      cluster: "mt1",
      /*
      userAuthentication: { endpoint: "/api/pusher-auth", transport: "ajax" },
      channelAuthorization: { endpoint: "/api/pusher-auth-channel", transport: "ajax" }
      */
    })

    // pusher.signin()

    const channel = pusher.subscribe(`instance.${instanceId}`)

    channel.bind("connection.update", (status: "close" | "connecting") => {
      setStatus(status)
    })

    channel.bind("qrcode.updated", (qrcode: string) => {
      setQrcode(qrcode)
    })

    return () => {
      channel.unbind("qrcode.updated")
      pusher.unsubscribe(`instance.${instanceId}`)
      pusher.disconnect()
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Instance ID: {instanceId}</h1>
      <h2>Status: {status}</h2>
      {status === "connecting" && (
        qrcode ? (
          <img src={qrcode} alt="QR Code" />
        ) : (
          <p>Waiting for QR code...</p>
        ))
      }
      <Link href={`/instances/${instanceId}/labels`} className="mt-4">
        Etiquetas
      </Link>
    </div>
  )
}

export default Instance
