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
import { useEffect } from "react"
import { toast } from "react-hot-toast"

const schema = z.object({
  code: z.string().min(1, "Code is required")
})

type FormData = z.infer<typeof schema>

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      code: ""
    }
  })

  const router = useRouter()

  let email: string | null = null

  if (typeof window !== "undefined") {
    email = localStorage.getItem("auth:email")
  }

  useEffect(() => {
    if (!email) {
      router.push("/register")
    }
  }, [email])

  const { mutate: verify, isPending: isVerifing } = useMutation({
    mutationFn: async ({ code }: FormData) => {
      const { error, data } = await authClient.emailOtp.verifyEmail({
        email: email!,
        otp: code
      })

      if (error) {
        throw new Error(error.message)
      }

      return data
    },
    onSuccess: () => {
      localStorage.removeItem("auth:email")
      router.push("/login")
      toast.success("Email verified successfully")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const { mutate: resend, isPending: isResending } = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.emailOtp.sendVerificationOtp({
        email: email!,
        type: "email-verification"
      })

      if (error) {
        throw new Error(error.message)
      }
    },
    onSuccess: () => {
      toast.success("Verification code resent successfully")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = handleSubmit((data) => verify(data))

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Verify Email</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <span className="text-sm text-gray-500">
            We have sent a verification code to your email address. Please enter the code below to verify your email.
          </span>
          <Input
            label="Code"
            type="text"
            placeholder="Enter the code you received"
            {...register("code")}
            error={errors.code}
          />
          <Button type="submit" loading={isVerifing} disabled={isVerifing || isResending} className="w-full">
            Verify
          </Button>
          <Button type="button" loading={isResending} disabled={isVerifing || isResending} className="w-full" onClick={() => resend()}>
            Resend Code
          </Button>
        </form>
      </Card>
    </div>
  )
}
