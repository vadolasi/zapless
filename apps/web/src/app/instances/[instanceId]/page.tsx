import client from "@/lib/httpClient";
import { headers } from "next/headers";
import Instance from "./data";

export default async function Page({ params }: { params: Promise<{ instanceId: string }> }) {
  const { instanceId } = await params

  const { data } = await client.instances({ instanceId })[""].get({ fetch: { headers: await headers() } })

  if (!data || !data.status) {
    return <div>Loading...</div>
  }

  return (
    <Instance instanceId={instanceId} status={data.status} qrcode={data.qrcode} />
  )
}
