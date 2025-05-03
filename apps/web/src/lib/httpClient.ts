import { App } from '@/backend'
import { treaty } from '@elysiajs/eden'
import { createAuthClient } from "better-auth/react"
import { emailOTPClient, apiKeyClient, passkeyClient } from "better-auth/client/plugins"

const { api: client } = treaty<App>(window.location.origin)

export const authClient = createAuthClient({
  baseURL: window.location.origin,
  basePath: "/api/auth",
  plugins: [
    emailOTPClient(),
    apiKeyClient(),
    passkeyClient()
  ]
})

export default client
