import { cn } from "@/lib/utils"

const Card: React.FC<React.PropsWithChildren & { className?: string }> = ({ className, children }) => {
  return (
    <div className={cn("max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700", className)}>
      {children}
    </div>
  )
}

Card.displayName = "Card"

export default Card
