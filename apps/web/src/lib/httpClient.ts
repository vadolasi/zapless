import { App } from '@/backend'
import { treaty } from '@elysiajs/eden'
import { createAuthClient } from "better-auth/react"
import { emailOTPClient, apiKeyClient, passkeyClient } from "better-auth/client/plugins"

let url = "http://localhost:3000"

if (window !== undefined) {
  url = window.location.origin
}

const { api: client } = treaty<App>(url)

export const authClient = createAuthClient({
  baseURL: url,
  basePath: "/api/auth",
  plugins: [
    emailOTPClient(),
    apiKeyClient(),
    passkeyClient()
  ]
})

export default client
