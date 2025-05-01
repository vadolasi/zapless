import { App } from '@/backend'
import { treaty } from '@elysiajs/eden'
import { createAuthClient } from "better-auth/react"
import { emailOTPClient, apiKeyClient, passkeyClient } from "better-auth/client/plugins"

const { api: client } = treaty<App>("localhost:3000")

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  basePath: "/api/auth",
  plugins: [
    emailOTPClient(),
    apiKeyClient(),
    passkeyClient()
  ]
})

export default client
