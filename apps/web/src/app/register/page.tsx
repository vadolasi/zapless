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
import Link from "@/app/components/link"

const schema = z.object({
  email: z.string().email().min(1, "Email is required").max(255, "Email must be less than 255 characters"),
  firstName: z.string().min(1, "First name is required").max(255, "First name must be less than 255 characters"),
  lastName: z.string().min(1, "Last name is required").max(255, "Last name must be less than 255 characters"),
  password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters long").max(255, "Password must be less than 255 characters"),
  passwordConfirmation: z.string().min(1, "Password confirmation is required")
}).superRefine((data) => {
  if (data.password !== data.passwordConfirmation) {
    throw new z.ZodError([
      {
        "path": ["passwordConfirmation"],
        "message": "Passwords do not match",
        "code": z.ZodIssueCode.custom
      }
    ])
  }
})

type FormData = z.infer<typeof schema>

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirmation: ""
    }
  })

  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password, firstName, lastName }: FormData) => {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name: `${firstName} ${lastName}`,
      })

      if (error) {
        throw new Error(error.message)
      }

      return data
    },
    onSuccess: (data) => {
      localStorage.setItem("auth:email", data.user.email)
      router.push("/verify-email")
    },
    onError: (error) => {
      console.error("Registration failed", error)
    }
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Register</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4 mt-3">
            <Input type="text" autoComplete="given-name webauthn" inputMode="text" label="First Name" error={errors.firstName} {...register("firstName")} />
            <Input type="text" label="Last Name" autoComplete="family-name webauthn"  inputMode="text" error={errors.lastName} {...register("lastName")} />
          </div>
          <Input type="email" autoComplete="email webauthn" inputMode="email" label="Email" error={errors.email} {...register("email")} />
          <Input type="password" autoComplete="new-password webauthn" label="Password"  inputMode="text" error={errors.password} {...register("password")} />
          <Input type="password" autoComplete="current-password webauthn" label="Password Confirmation" inputMode="text" error={errors.passwordConfirmation} {...register("passwordConfirmation")} />
          <Button type="submit" className="w-full mt-2" loading={isPending} disabled={isPending}>Register</Button>
          <span className="text-sm text-gray-500 text-center">
            Do you already have an account? <Link href="/login">Login</Link>
          </span>
        </form>
      </Card>
    </div>
  )
}
