import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KitchenAI360 collects, uses, and protects your personal information.",
}

const EFFECTIVE_DATE = "March 2026"

export default function PrivacyPage() {
  return (
    <>
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="default" className="mb-5">Legal</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-slate-400">
              Effective date: {EFFECTIVE_DATE}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="surface">
        <Container narrow>
          <div className="prose-custom rounded-xl border border-slate-200 bg-white p-8 text-sm leading-relaxed text-slate-700">

            <p className="text-slate-500 mb-8">
              This Privacy Policy describes how KitchenAI360 (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) collects, uses, and handles information when you visit our
              website or interact with our platform. By using our website, you
              agree to the practices described here.
            </p>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">1. Information we collect</h2>
              <h3 className="text-sm font-semibold text-navy-800 mb-2">Information you provide</h3>
              <p className="mb-3">
                When you submit a waitlist request or demo request form, we
                collect the contact information you enter — typically your name,
                email address, professional role, and any optional details you
                choose to include.
              </p>
              <p className="mb-3">
                When you use the planning platform (once available), we collect
                the project parameters you enter: kitchen dimensions, appliance
                selections, layout configuration, and any notes you include in
                your submission.
              </p>

              <h3 className="text-sm font-semibold text-navy-800 mb-2 mt-5">Information collected automatically</h3>
              <p className="mb-3">
                When you visit our website, we automatically collect certain
                information through analytics tools including: pages visited,
                time on page, browser type, operating system, referring URL, and
                approximate geographic location (country or region level). This
                information is used to understand how the site is used and to
                improve it.
              </p>
              <p>
                We use Vercel Analytics and Vercel Speed Insights for this
                purpose. These tools do not collect personally identifiable
                information beyond what is described above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">2. How we use your information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-3">
                <li>Process and respond to waitlist and demo requests</li>
                <li>Contact you about early access availability</li>
                <li>Process kitchen layout review submissions on the platform</li>
                <li>Understand how the website and platform are being used</li>
                <li>Improve the platform based on usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We do not use your information for advertising purposes. We do
                not sell, rent, or trade your personal information to third
                parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">3. How we store your information</h2>
              <p className="mb-3">
                Contact information collected through forms is stored in a
                secured database hosted on our platform infrastructure. We apply
                reasonable technical measures to protect stored data from
                unauthorized access.
              </p>
              <p>
                We retain contact information for as long as is necessary to
                fulfil the purpose for which it was collected, or as required by
                law. You may request deletion of your information at any time by
                contacting us (see Section 7).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">4. Third-party services</h2>
              <p className="mb-3">
                We use a small number of third-party services to operate the
                platform:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-3">
                <li>
                  <span className="font-medium">Vercel</span> — hosting and
                  analytics infrastructure
                </li>
                <li>
                  <span className="font-medium">Resend</span> — transactional
                  email delivery (for confirmation emails)
                </li>
              </ul>
              <p>
                Each of these providers has its own privacy policy and data
                handling practices. We use them solely to provide the services
                described and do not authorise them to use your data for their
                own purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">5. Cookies</h2>
              <p className="mb-3">
                Our website may use cookies or local storage for basic
                functionality (for example, to preserve a session or remember
                preferences across page loads). We do not use third-party
                advertising cookies or tracking pixels.
              </p>
              <p>
                You can control cookie behaviour through your browser settings.
                Disabling cookies may affect some site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">6. Children&#39;s privacy</h2>
              <p>
                Our website and platform are not directed at children under the
                age of 13. We do not knowingly collect personal information from
                children. If you believe we have inadvertently collected
                information from a child, please contact us and we will delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">7. Your rights and choices</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-3">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent to email communications at any time</li>
              </ul>
              <p>
                To exercise any of these rights,{" "}
                <Link
                  href="/contact"
                  className="text-accent-600 underline underline-offset-2 hover:text-accent-700"
                >
                  contact us
                </Link>
                . We will respond within a reasonable timeframe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-navy-900 mb-3">8. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy as the platform develops. If
                we make material changes, we will update the effective date at
                the top of this page. We encourage you to review this page
                periodically. Continued use of the website after changes are
                posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy-900 mb-3">9. Contact</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle
                your information, please use our{" "}
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
