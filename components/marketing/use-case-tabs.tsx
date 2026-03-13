"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Home, PenTool, HardHat } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

const tabs = [
  {
    id: "homeowner",
    label: "Homeowners",
    icon: Home,
    heading: "Plan your renovation with confidence",
    body: "Understand clearance requirements, compare layout options, and communicate your vision clearly to your design and build team — without needing to interpret technical standards yourself.",
    points: [
      "Understand what clearances your layout requires",
      "Compare configurations before committing to a design",
      "Share a specification summary with your contractor",
    ],
  },
  {
    id: "designer",
    label: "Designers",
    icon: PenTool,
    heading: "Verify specifications as you design",
    body: "Catch potential clearance issues early in the planning process, before they reach the build phase. Reduce revision cycles and improve the handoff documentation you provide to contractors.",
    points: [
      "Surface potential clearance issues before client sign-off",
      "Reference NKBA guidelines without leaving your workflow",
      "Generate project documentation for contractor handoff",
    ],
  },
  {
    id: "contractor",
    label: "Contractors",
    icon: HardHat,
    heading: "Reference requirements quickly in the field",
    body: "Look up clearance minimums, appliance rough-in dimensions, and layout specifications during estimation and build — without back-and-forth with the design team.",
    points: [
      "Look up standard clearance requirements quickly",
      "Reference appliance and cabinet dimension data",
      "Reduce design clarification requests during build",
    ],
  },
]

export function UseCaseTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0]

  return (
    <Section background="surface">
      <Container>
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent-500">
            Who it&apos;s for
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            Built for everyone in the process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Kitchen projects involve multiple stakeholders. KitchenAI360 is
            designed to be useful across the full planning process.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="mb-8 flex justify-center">
          <div
            className="inline-flex gap-1 rounded-lg border border-slate-200 bg-white p-1"
            role="tablist"
            aria-label="User types"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeId === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150",
                  activeId === tab.id
                    ? "bg-navy-900 text-white"
                    : "text-navy-700 hover:bg-navy-50 hover:text-navy-900",
                )}
              >
                <tab.icon size={14} aria-hidden />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panel with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`tabpanel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50">
              <active.icon size={16} className="text-navy-700" aria-hidden />
            </div>

            <h3 className="text-xl font-semibold text-navy-900">
              {active.heading}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">{active.body}</p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {active.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-accent-500"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="/use-cases"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                See all use cases
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}
