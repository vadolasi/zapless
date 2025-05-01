import client from "@/lib/httpClient"
import { headers } from "next/headers"
import Labels from "./data"

export default async function Page({ params }: { params: Promise<{ instanceId: string }> }) {
  const { instanceId } = await params

  const { data } = await client.instances({ instanceId }).labels[""].get({ fetch: { headers: await headers() } })

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <Labels instanceId={instanceId} labels={data} />
  )
}
