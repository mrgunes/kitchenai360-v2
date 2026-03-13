"use client"

import { Fragment } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Package,
  Layers,
  LayoutGrid,
  Brain,
  ShieldCheck,
  Ruler,
  CheckCircle2,
  FileText,
  FileDown,
} from "lucide-react"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

const diagramColumns = [
  {
    label: "Inputs",
    iconColor: "text-slate-500",
    items: [
      { icon: LayoutGrid, label: "Floor plan & dimensions" },
      { icon: Package, label: "Appliance specifications" },
      { icon: Layers, label: "Cabinet catalog" },
    ],
  },
  {
    label: "Analysis",
    iconColor: "text-navy-700",
    items: [
      { icon: Brain, label: "AI planning analysis" },
      { icon: ShieldCheck, label: "Standards verification" },
      { icon: Ruler, label: "Clearance validation" },
    ],
  },
  {
    label: "Outputs",
    iconColor: "text-accent-600",
    items: [
      { icon: CheckCircle2, label: "Validated layout" },
      { icon: FileText, label: "Build specifications" },
      { icon: FileDown, label: "Planning report" },
    ],
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      {/* Subtle radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% -10%, rgba(242,107,29,0.07) 0%, transparent 65%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left: hero text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-accent-50 px-3 py-1 text-xs font-medium text-accent-600">
              Early access — currently in development
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.25rem]">
              Kitchen planning built around accuracy
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              KitchenAI360 helps designers, contractors, and homeowners verify
              layouts against published industry standards — reducing costly
              specification errors before construction begins.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/request-demo"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Request a Demo
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/waitlist"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Join the Waitlist
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              No commitment required. We will contact you when early access opens.
            </p>
          </motion.div>

          {/* Right: workflow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            aria-label="Conceptual AI planning workflow"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              {/* Panel header */}
              <div className="mb-5 flex items-center gap-2">
                <div className="flex gap-1" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Conceptual: AI planning workflow
                </span>
              </div>

              {/* Three-column diagram */}
              <div className="flex items-stretch gap-1">
                {diagramColumns.map((col, colIndex) => (
                  <Fragment key={col.label}>
                    {/* Column */}
                    <div className="flex flex-1 flex-col gap-2">
                      {/* Column label */}
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {col.label}
                      </p>

                      {/* Items */}
                      {col.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.35 + colIndex * 0.12 + itemIndex * 0.07,
                            duration: 0.35,
                          }}
                          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 shadow-sm"
                        >
                          <item.icon
                            size={13}
                            className={`shrink-0 ${col.iconColor}`}
                            aria-hidden
                          />
                          <span className="text-[11px] leading-tight text-slate-600">
                            {item.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Connector arrow between columns */}
                    {colIndex < diagramColumns.length - 1 && (
                      <div
                        className="flex shrink-0 items-center self-stretch pt-6"
                        aria-hidden
                      >
                        <ChevronRight size={14} className="text-slate-300" />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Standards note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="mt-4 flex items-center gap-2 rounded-lg border border-navy-100 bg-navy-50 px-3 py-2"
              >
                <ShieldCheck size={12} className="shrink-0 text-navy-700" aria-hidden />
                <p className="text-[10px] text-navy-700">
                  Guidance grounded in NKBA, IRC, and ADA published standards
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
