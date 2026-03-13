"use client"

import { Fragment } from "react"
import Link from "next/link"
import { ArrowRight, ClipboardList, ScanLine, FileDown } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Describe your project",
    description:
      "Enter your kitchen dimensions, appliance selections, and layout goals. The platform captures the parameters it needs to assess your design.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Review AI-assisted feedback",
    description:
      "KitchenAI360 checks your layout against published clearance guidelines and surfaces potential specification issues for your review.",
  },
  {
    number: "03",
    icon: FileDown,
    title: "Refine and export",
    description:
      "Adjust your plan based on the guidance provided and export a specification summary for your team, client, or contractor.",
  },
]

export function HowItWorksSteps() {
  return (
    <Section background="white">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent-500">
            How it works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            Three steps to verified specs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            A straightforward process designed around the way kitchen projects
            actually get planned.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              {/* Step arrow separator (desktop) */}
              {i > 0 && (
                <div
                  className="hidden shrink-0 items-center pt-14 md:flex"
                  aria-hidden
                >
                  <ArrowRight size={18} className="text-slate-300" />
                </div>
              )}

              <motion.div
                className="flex flex-1 flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" as const }}
              >
                {/* Step number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white">
                  <span className="text-xs font-bold text-accent-500">
                    {step.number}
                  </span>
                </div>

                {/* Step card */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white">
                    <step.icon size={16} className="text-navy-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            See the full process
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
