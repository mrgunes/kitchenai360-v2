import { cn } from "@/lib/utils/cn"
import { HTMLAttributes } from "react"

export type BadgeVariant = "default" | "navy" | "accent" | "outline"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-navy-50 text-navy-700 border-transparent",
  navy:    "bg-navy-900 text-white border-transparent",
  accent:  "bg-accent-50 text-accent-600 border-transparent",
  outline: "bg-transparent text-navy-700 border-slate-200",
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
