"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../components/input"
import Button from "../components/button"
import Card from "../components/card"
import { useMutation } from "@tanstack/react-query"
import { authClient } from "@/lib/httpClient"
import { useRouter } from "next/navigation"
import Link from "../components/link"
import toast from "react-hot-toast"

const schema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required")
})

type FormData = z.infer<typeof schema>

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }: FormData) => {
      const { data, error } = await authClient.signIn.email({
        email,
        password
      })

      if (error) {
        throw new Error(error.message, { cause: error.code })
      }

      return data
    },
    onSuccess: () => {
      router.push("/home")
    },
    onError: (error, { email }) => {
      if (error.cause === "EMAIL_NOT_VERIFIED") {
        localStorage.setItem("auth:email", email)
        toast.error("Email not verified. Please verify your email.")
        router.push("/verify-email")
      } else {
        toast.error(error.message)
      }
    }
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input type="email" autoComplete="email webauthn" inputMode="email" label="Email" error={errors.email} {...register("email")} />
          <Input type="password" autoComplete="current-password webauthn" label="Password"  inputMode="text" error={errors.password} {...register("password")} />
          <Button type="submit" className="w-full mt-2" loading={isPending} disabled={isPending}>Login</Button>
          <span className="text-sm text-gray-500 text-center">
            Don't have an account? <Link href="/register">Register</Link>
          </span>
          <Link href="/forgot-password" className="text-sm text-center">
            Forgot Password?
          </Link>
        </form>
      </Card>
    </div>
  )
}
