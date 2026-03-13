"use client"

import { CheckSquare, Layers, Search, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FeatureCard } from "@/components/marketing/feature-card"

const features = [
  {
    icon: CheckSquare,
    title: "Specification verification",
    description:
      "Check layouts against published clearance requirements and workflow standards before they become costly construction errors.",
  },
  {
    icon: Layers,
    title: "Layout guidance",
    description:
      "Understand spatial requirements, workflow zones, and clearance minimums for different kitchen configurations and appliance arrangements.",
  },
  {
    icon: Search,
    title: "Product specification lookup",
    description:
      "Reference appliance and cabinet dimension data during the planning process — without hunting through individual manufacturer spec sheets.",
  },
  {
    icon: FileText,
    title: "Project documentation",
    description:
      "Generate specification summaries for client review, contractor handoff, and project record-keeping.",
  },
]

export function FeatureGrid() {
  return (
    <Section background="surface">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent-500">
            Platform capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            What KitchenAI360 is designed to do
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            An AI-assisted planning tool focused on specification accuracy.
            Currently in development — the following reflects our intended
            feature scope.
          </p>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
