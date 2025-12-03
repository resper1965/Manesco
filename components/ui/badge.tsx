import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
        secondary:
          "border-transparent bg-slate-700/50 text-slate-200 hover:bg-slate-700",
        success:
          "border-transparent bg-green-500/10 text-green-400 hover:bg-green-500/20",
        warning:
          "border-transparent bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20",
        danger:
          "border-transparent bg-red-500/10 text-red-400 hover:bg-red-500/20",
        critical:
          "border-transparent bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
        info:
          "border-transparent bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
        outline: "text-slate-300 border-slate-700",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
