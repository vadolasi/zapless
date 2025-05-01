import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { admin, apiKey, emailOTP } from "better-auth/plugins"
import { passkey } from "better-auth/plugins/passkey"
import db from "./database"
import Elysia from "elysia"
import { Resend } from "resend"
import env from "./env"
import OTPEmail from "@/emails/otp"

const resend = new Resend(env.RESEND_API_KEY)

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true
  },
  plugins: [
    admin(),
    apiKey(),
    emailOTP({
      otpLength: 8,
      expiresIn: 60 * 60 * 3 + 60 * 30,
      disableSignUp: true,
      sendVerificationOnSignUp: true,
      sendVerificationOTP: async ({ email, otp, type }) => { 
        resend.emails.send({
          from: "Zapless <zapless@vitordaniel.com>",
          to: email,
          subject: type === "sign-in" ? "Sign in OTP" : type === "email-verification" ? "Email verification OTP" : "Password reset OTP",
          react: await OTPEmail({ otp, type })
        })
      }
    }),
    passkey()
  ],
  secondaryStorage: {
		get: async (key) => {
			const value = await Bun.redis.get(key)
			return value ? value : null
		},
		set: async (key, value, ttl) => {
			await Bun.redis.set(key, value)
      if (ttl) {
        await Bun.redis.expire(key, ttl)
      }
		},
		delete: async (key) => {
			await Bun.redis.del(key)
		}
	}
})

export const authMiddleware = new Elysia({ name: "better-auth" })
  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await auth.api.getSession({
          headers
        })

        if (!session) return status(401)

        return {
          user: session.user,
          session: session.session
        }
      }
    }
  })
