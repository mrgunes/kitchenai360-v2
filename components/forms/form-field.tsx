import { HTMLAttributes } from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils/cn"

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  hint?: string
}

/**
 * Wraps a Label, optional hint, any form control (child), and an error message.
 * Pass the matching id to the child input/select/textarea.
 */
export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  className,
  children,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="ml-0.5 text-accent-500" aria-hidden="true">
            *
          </span>
        )}
      </Label>
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
