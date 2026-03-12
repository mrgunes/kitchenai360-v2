import { Hero } from "@/components/marketing/hero"
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
