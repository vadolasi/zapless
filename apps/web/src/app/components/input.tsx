"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { FieldError } from "react-hook-form"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: FieldError
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, error, ...props }, ref) => {
  return (
    <div>
      {label && <label htmlFor={props.name} className={cn("block mb-2 text-sm font-medium text-gray-900 dark:text-white", error && "text-red-700 dark:text-red-500")}>{label}</label>}
      <input
        ref={ref}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          error && "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500",
          className
        )}
        {...props}
      />
      {(error && error.message) && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.message}</p>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
