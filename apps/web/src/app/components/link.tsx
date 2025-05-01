import { cn } from "@/lib/utils"
import NextLink from "next/link"

const Link: React.FC<Parameters<typeof NextLink>[0] & { external?: boolean }> = ({ className, external = false, href, ...props }) => {
  return external ? (
    <a
      className={cn(
        "font-medium text-blue-600 dark:text-blue-500 hover:underline",
        className
      )}
      href={typeof href === "string" ? href : undefined}
      {...props}
    />
  ) : (
    <NextLink
      className={cn(
        "font-medium text-blue-600 dark:text-blue-500 hover:underline",
        className
      )}
      href={href}
      {...props}
    />
  )
}

Link.displayName = "Link"

export default Link
