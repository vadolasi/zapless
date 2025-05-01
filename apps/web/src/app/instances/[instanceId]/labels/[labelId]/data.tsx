"use client"

import Link from "@/app/components/link"
import Table from "@/app/components/table"
import { createColumnHelper } from "@tanstack/react-table"

interface Chat {
  id: string
  name: string | null
}

const columnHelper = createColumnHelper<Chat>()

const columns = [
  columnHelper.accessor("name", {
    header: "Nome",
    cell: (info) => info.getValue()
  }),
  columnHelper.display({
    id: "actions",
    header: "Ações",
    cell: (info) => (
      <Link
        href={`/chat?currentChat=${info.row.original.id}`}
        className="text-blue-500 hover:text-blue-700"
      >
        Ver
      </Link>
    )
  })
]

const LabelChats: React.FC<Readonly<{ instanceId: string, labelId: string, chats: Chat[] }>> = ({ instanceId, labelId, chats }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Table data={chats} columns={columns} />
    </div>
  )
}

export default LabelChats
