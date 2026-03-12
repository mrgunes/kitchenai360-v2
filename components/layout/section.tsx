import { cn } from "@/lib/utils/cn"
import { ElementType, HTMLAttributes } from "react"

type SectionBackground = "white" | "surface" | "navy"
type SectionSize = "sm" | "md" | "lg"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  size?: SectionSize
  background?: SectionBackground
}

const sizeClasses: Record<SectionSize, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
}

const backgroundClasses: Record<SectionBackground, string> = {
  white:   "bg-white",
  surface: "bg-slate-50",
  navy:    "bg-navy-900 text-white",
}

export function Section({
  className,
  as: Tag = "section",
  size = "md",
  background = "white",
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(sizeClasses[size], backgroundClasses[background], className)}
      {...props}
    />
  )
}
