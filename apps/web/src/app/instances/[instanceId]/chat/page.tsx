export default async function ChatPage({ params }: { params: Promise<{ instanceId: string }> }) {
  const { instanceId } = await params

  return (
    <span>{instanceId}</span>
  )
}
