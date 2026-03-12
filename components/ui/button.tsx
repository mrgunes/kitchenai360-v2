import { cn } from "@/lib/utils/cn"
import { ButtonHTMLAttributes, forwardRef } from "react"

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted"
export type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500",
  secondary:
    "border border-slate-200 text-navy-900 bg-transparent hover:bg-navy-50 focus-visible:ring-navy-900",
  ghost:
    "text-navy-700 bg-transparent hover:bg-navy-50 hover:text-navy-900 focus-visible:ring-navy-700",
  /** Use on navy/dark backgrounds in place of secondary. */
  inverted:
    "border border-white/30 text-white bg-transparent hover:border-white/50 hover:bg-white/10 focus-visible:ring-white",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium " +
  "transition-colors duration-150 cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50"

/**
 * Returns Tailwind class string for button styling.
 * Use this on <Link> or other elements that should look like a button.
 */
export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  ),
)
Button.displayName = "Button"

export { Button }
