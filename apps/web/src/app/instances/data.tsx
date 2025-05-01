"use client"

import { createColumnHelper } from "@tanstack/react-table"
import Table from "../components/table"
import Button from "../components/button"
import { initFlowbite } from "flowbite"
import { useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import client from "@/lib/httpClient"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import Link from "../components/link"

const columnHelper = createColumnHelper<{ id: string }>()

const columns = [
  columnHelper.accessor("id", {
    header: () => <span>Instance ID</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <span>Actions</span>,
    cell: info => (
      <div className="flex gap-2">
        <Link
          href={`/instances/${info.row.original.id}`}
        >
          Ver
        </Link>
      </div>
    ),
  }),
]

const Data: React.FC<Readonly<{ instances: { id: string }[] }>> = ({ instances }) => {
  useEffect(() => {
    initFlowbite()
  }, [])

  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { data, error } = await client.instances[""].post()

      if (error) {
        throw new Error(error?.value as string ?? "Error creating instance", {
          cause: error.status
        })
      }
      
      return data
    },
    onSuccess: (data) => {
      router.push(`/instances/${data.instanceId}`)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return (
    <div>
      <Button data-modal-target="default-modal" data-modal-toggle="default-modal">Adicionar instância</Button>
      <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Criar instância
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Tem certeza que deseja criar uma nova instância?
                </p>
                <Button type="button" onClick={() => mutate()} disabled={isPending} loading={isPending}>Criar</Button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
            </div>
        </div>
      </div>
    </div>
      <Table data={instances} columns={columns} />
    </div>
  )
}

export default Data
