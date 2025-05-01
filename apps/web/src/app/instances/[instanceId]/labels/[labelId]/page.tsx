import client from "@/lib/httpClient"
import { headers } from "next/headers"
import LabelChats from "./data"

export default async function Page({ params }: { params: Promise<{ instanceId: string, labelId: string }> }) {
  const { instanceId, labelId } = await params

  const { data } = await client.instances({ instanceId }).labels({ labelId }).get({ fetch: { headers: await headers() } })

  if (data === null) {
    return <div>Loading...</div>
  }

  return (
    <LabelChats instanceId={instanceId} labelId={labelId} chats={data} />
  )
}
