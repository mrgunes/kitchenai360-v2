import { BookOpen, Ruler, Layers, Users } from "lucide-react"
import { Container } from "@/components/layout/container"

const signals = [
  {
    icon: BookOpen,
    label: "NKBA kitchen planning guidelines",
  },
  {
    icon: Ruler,
    label: "Clearance and code-based spec checking",
  },
  {
    icon: Layers,
    label: "Cabinet, appliance, and fixture categories",
  },
  {
    icon: Users,
    label: "Built for designers, contractors, and homeowners",
  },
]

export function CredibilityBar() {
  return (
    <div className="border-y border-slate-200 bg-slate-50 py-8">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {signals.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm text-navy-700"
            >
              <item.icon
                size={16}
                className="shrink-0 text-accent-500"
                aria-hidden
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
