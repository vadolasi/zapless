"use client"

import Link from "@/app/components/link"
import Table from "@/app/components/table"
import { createColumnHelper } from "@tanstack/react-table"
import { useMemo } from "react"

interface Tag {
  id: string
  name: string
  color: string
}

const columnHelper = createColumnHelper<Tag>()

const Labels: React.FC<Readonly<{ labels: Tag[], instanceId: string }>> = ({ labels, instanceId }) => {
  const columns = useMemo(() => [
    columnHelper.accessor("name", {
      header: "Nome",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("color", {
      header: "Cor",
      cell: (info) => <div style={{ backgroundColor: info.getValue(), width: "100%", height: "100%" }}></div>
    }),
    columnHelper.display({
      id: "actions",
      header: "Ações",
      cell: (info) => (
        <Link
          href={`/instances/${instanceId}/labels/${info.row.original.id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          Ver
        </Link>
      )
    })
  ], [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Table data={labels} columns={columns} />
    </div>
  )
}

export default Labels
