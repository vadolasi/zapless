import Link from "../components/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to the WhatsApp Web API</h1>
      <p className="mt-4 text-lg">This is a simple API for WhatsApp Web.</p>
      <p className="mt-2 text-lg">You can use it to send and receive messages, manage contacts, and more.</p>
      <Link href="/instances">
        Go to Instances
      </Link>
    </div>
  )
}
