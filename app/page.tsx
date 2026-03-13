import type { Metadata } from "next"
import { Hero } from "@/components/marketing/hero"

export const metadata: Metadata = {
  title: "KitchenAI360 — AI-Assisted Kitchen Planning",
  description:
    "KitchenAI360 helps designers, contractors, and homeowners verify kitchen layouts against published industry standards — reducing specification errors before construction begins.",
  openGraph: {
    title: "KitchenAI360 — AI-Assisted Kitchen Planning",
    description:
      "Verify kitchen layouts against NKBA, IRC, and ADA standards. An early-stage AI planning platform built for designers, contractors, and homeowners.",
    type: "website",
    url: "https://kitchenai360.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "KitchenAI360 — AI-Assisted Kitchen Planning",
    description:
      "Verify kitchen layouts against NKBA, IRC, and ADA standards. An early-stage AI planning platform.",
  },
}


import { CredibilityBar } from "@/components/marketing/credibility-bar"
import { FeatureGrid } from "@/components/marketing/feature-grid"
import { HowItWorksSteps } from "@/components/marketing/how-it-works-steps"
import { UseCaseTabs } from "@/components/marketing/use-case-tabs"
import { StandardsSummary } from "@/components/marketing/standards-summary"
import { FaqAccordion } from "@/components/marketing/faq-accordion"
import { CtaBanner } from "@/components/marketing/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <FeatureGrid />
      <HowItWorksSteps />
      <UseCaseTabs />
      <StandardsSummary />
      <FaqAccordion />
      <CtaBanner />
    </>
  )
}
