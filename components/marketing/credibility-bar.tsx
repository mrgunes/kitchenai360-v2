"use client"

import { BookOpen, Ruler, Layers, Users } from "lucide-react"
import { motion } from "framer-motion"
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
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          {signals.map((item) => (
            <motion.li
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex items-center gap-2.5 text-sm text-navy-700"
            >
              <item.icon
                size={16}
                className="shrink-0 text-accent-500"
                aria-hidden
              />
              <span>{item.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </div>
  )
}
