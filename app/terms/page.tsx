import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the KitchenAI360 website and platform.",
}

const EFFECTIVE_DATE = "March 2026"

export default function TermsPage() {
  return (
    <>
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="default" className="mb-5">Legal</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-slate-400">
              Effective date: {EFFECTIVE_DATE}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="surface">
        <Container narrow>
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-sm leading-relaxed text-slate-700">

            <p className="text-slate-500 mb-8">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the KitchenAI360
              website and platform (collectively, the &ldquo;Service&rdquo;) operated by
              KitchenAI360 (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the
              Service, you agree to be bound by these Terms. If you do not agree,
              do not use the Service.
            </p>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">1. Nature of the service</h2>
              <p className="mb-3">
                KitchenAI360 is an early-stage AI-assisted kitchen planning
                platform currently in development. The Service provides
                specification reference information based on publicly documented
                industry standards. It is designed as a planning aid only.
              </p>
              <p className="mb-3">
                The Service is not a licensed design service, engineering service,
                or code compliance tool. Output produced by the platform — including
                specification flags, clearance notes, and summary documents — does
                not constitute professional advice and does not certify compliance
                with any building code, regulation, or legal standard.
              </p>
              <p>
                All output should be reviewed by a qualified professional
                (designer, architect, contractor, or building official) before
                being relied upon for construction, permitting, or occupancy
                decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use the Service. By using
                the Service, you represent that you meet this requirement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">3. Acceptable use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-3">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Service or its infrastructure</li>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Scrape, crawl, or systematically extract data from the Service without permission</li>
                <li>Interfere with or disrupt the Service or servers connected to it</li>
                <li>Use the Service to transmit spam, malicious code, or harmful content</li>
                <li>Reproduce or redistribute platform output for commercial resale without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">4. Intellectual property</h2>
              <p className="mb-3">
                All content on the KitchenAI360 website and platform — including
                text, design, code, and data compilations — is owned by
                KitchenAI360 or its licensors and is protected by applicable
                intellectual property law.
              </p>
              <p>
                The industry standards and guidelines we reference (NKBA, IRC,
                ADA) are the property of their respective publishing
                organisations. We reference these standards for informational
                purposes only and do not claim ownership of them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">5. Disclaimer of warranties</h2>
              <p className="mb-3">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any
                warranty of any kind, express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-3">
                <li>The Service will be uninterrupted, error-free, or available at all times</li>
                <li>Output produced by the platform is accurate, complete, or current</li>
                <li>The platform correctly applies all relevant standards to your specific situation</li>
                <li>Using the platform will result in a compliant, buildable, or approved kitchen design</li>
              </ul>
              <p>
                To the maximum extent permitted by applicable law, we disclaim
                all warranties, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">6. Limitation of liability</h2>
              <p className="mb-3">
                To the maximum extent permitted by applicable law, KitchenAI360
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of or
                inability to use the Service — including but not limited to
                construction errors, code violations, project delays, or cost
                overruns resulting from reliance on platform output.
              </p>
              <p>
                Our total liability to you for any claim arising from your use of
                the Service shall not exceed the greater of the amount you paid to
                use the Service in the twelve months preceding the claim, or
                fifty US dollars (USD $50).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">7. Third-party links and content</h2>
              <p>
                The Service may contain links to third-party websites or
                resources. These links are provided for convenience only. We do
                not endorse, control, or accept responsibility for the content or
                practices of any third-party site. Accessing third-party links is
                at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">8. Changes to the service</h2>
              <p>
                We are actively developing the platform. We may modify, suspend,
                or discontinue any part of the Service at any time without notice
                or liability. During the early access period especially, features
                may be added, changed, or removed as development progresses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">9. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. If we make material
                changes, we will update the effective date at the top of this
                page. Continued use of the Service after updated Terms are posted
                constitutes your acceptance of the changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">10. Governing law</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which
                KitchenAI360 is registered, without regard to conflict of law
                principles. Any disputes arising from these Terms or your use of
                the Service shall be resolved in the courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy-900 mb-3">11. Contact</h2>
              <p>
                Questions about these Terms should be directed via our{" "}
                <Link
                  href="/contact"
                  className="text-accent-600 underline underline-offset-2 hover:text-accent-700"
                >
                  contact page
                </Link>
                .
              </p>
            </section>

          </div>
        </Container>
      </Section>
    </>
  )
}
