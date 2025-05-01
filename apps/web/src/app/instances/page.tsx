import client from "@/lib/httpClient"
import Data from "./data"
import { headers } from "next/headers"

export default async function Page() {
  const { data } = await client.instances[""].get({ fetch: { headers: await headers() } })

  let instances: { id: string }[] = []

  if (data?.instances?.length) {
    instances = data.instances.map((instance) => ({
      id: instance.id
    }))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Data instances={instances} />
    </div>
  )
}
