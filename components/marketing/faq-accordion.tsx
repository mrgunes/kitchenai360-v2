"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

const faqs = [
  {
    question: "What is KitchenAI360?",
    answer:
      "KitchenAI360 is an early-stage AI-assisted kitchen planning platform. It is designed to help designers, contractors, and homeowners verify kitchen layouts against published industry standards — reducing specification errors before construction begins. The platform is currently in development.",
  },
  {
    question: "Is KitchenAI360 ready for professional use?",
    answer:
      "Not yet. We are actively developing the platform and gathering input from early users. If you are a design professional or contractor interested in early access, you can join our waitlist or request a demo to be involved in our testing process.",
  },
  {
    question: "How does the AI assistance work?",
    answer:
      "The platform is designed to check your layout inputs against published clearance guidelines and flag potential issues — such as appliance spacing, workflow clearances, and dimensional requirements. It surfaces relevant standards for your review, rather than making autonomous decisions.",
  },
  {
    question: "What standards does KitchenAI360 reference?",
    answer:
      "We reference publicly documented standards including NKBA Kitchen Planning Guidelines, International Residential Code (IRC) clearance requirements, and ADA accessibility guidelines where applicable. We are transparent about our sources. We do not guarantee compliance with local code — all output should be reviewed by a qualified professional.",
  },
  {
    question: "How do I get early access?",
    answer:
      "You can join our waitlist for updates on availability, or request a demo to speak with our team directly. We are prioritising early access for design professionals, contractors, and homeowners with active renovation projects.",
  },
  {
    question: "How is my information handled?",
    answer:
      "We collect only what is necessary to process your request and contact you about early access. You can review our full Privacy Policy for details on how your data is stored and used.",
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section background="surface">
      <Container narrow>
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent-500">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-slate-500">
            Straightforward answers about what KitchenAI360 is and is not at
            this stage.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={cn(index < faqs.length - 1 && "border-b border-slate-200")}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-sm font-medium text-navy-900 transition-colors duration-150 hover:bg-slate-50"
                >
                  {faq.question}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "ml-4 shrink-0 text-slate-400 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/faq"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            View all FAQs
          </Link>
        </div>
      </Container>
    </Section>
  )
}
