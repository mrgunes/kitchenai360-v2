import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about KitchenAI360 — what it is, how it works, what it costs, and who it is designed for.",
}

const faqGroups = [
  {
    heading: "About the platform",
    items: [
      {
        question: "What is KitchenAI360?",
        answer:
          "KitchenAI360 is an early-stage AI-assisted kitchen planning platform. It is designed to help designers, contractors, and homeowners verify kitchen layouts against published industry standards — reducing specification errors before construction begins. The platform is currently in development.",
      },
      {
        question: "Is KitchenAI360 a design tool or a compliance tool?",
        answer:
          "Neither, exactly. KitchenAI360 is a planning verification aid. It checks layout parameters against published guidelines and surfaces potential issues for your review. It is not a full design application and it does not produce certified compliance documents. It is most useful as a reference layer alongside your existing design or planning process.",
      },
      {
        question: "What makes KitchenAI360 different from a kitchen design app?",
        answer:
          "Most kitchen design apps focus on visual layout and product selection. KitchenAI360 focuses specifically on specification accuracy — flagging clearance issues, checking appliance spacing against published standards, and producing documentation to support handoff. It is a complement to design tools, not a replacement for them.",
      },
      {
        question: "Is the platform available now?",
        answer:
          "Not yet in full form. We are actively developing the platform and gathering input from early users. If you are a design professional, contractor, or homeowner with an interest in the tool, you can join our waitlist or request a demo to be involved in our testing process.",
      },
    ],
  },
  {
    heading: "Standards and accuracy",
    items: [
      {
        question: "What standards does KitchenAI360 reference?",
        answer:
          "We reference publicly documented standards: NKBA Kitchen Planning Guidelines, the International Residential Code (IRC), and ADA Standards for Accessible Design where applicable. We are transparent about our sources and every flagged item links to the relevant guideline.",
      },
      {
        question: "Does KitchenAI360 guarantee code compliance?",
        answer:
          "No. KitchenAI360 does not certify compliance with any code or legal standard. Building codes are adopted and amended at the state and local level; the platform does not account for your jurisdiction's specific requirements. All guidance should be reviewed by a qualified professional before construction begins.",
      },
      {
        question: "How accurate is the AI feedback?",
        answer:
          "AI systems can produce incorrect or incomplete outputs. We work to keep the specification checks accurate, but the platform should not be treated as a definitive source. Treat all flagged items and specification notes as input for professional review — particularly for decisions that affect construction, permits, or occupant safety.",
      },
      {
        question: "Does it cover commercial kitchens?",
        answer:
          "No. KitchenAI360 is designed for residential kitchen planning. Commercial kitchens are subject to different regulatory frameworks (NSF, health department requirements, local fire codes) that are outside our scope.",
      },
    ],
  },
  {
    heading: "Who it is for",
    items: [
      {
        question: "Can homeowners use it without a design background?",
        answer:
          "Yes — that is part of the design intent. Homeowners can use KitchenAI360 to understand clearance requirements, compare layout options, and generate a specification summary to share with their contractor or designer. You do not need to interpret technical standards yourself.",
      },
      {
        question: "Is it useful for professional designers?",
        answer:
          "Yes. Designers can use it as a verification layer during the planning process — checking a layout against published standards before client sign-off, reducing revision cycles, and generating documentation for contractor handoff. We are particularly interested in feedback from professional designers during our early access phase.",
      },
      {
        question: "Can contractors use it on-site?",
        answer:
          "The intent is that it works on any browser-enabled device, so yes. Contractors can use it to quickly look up clearance minimums, reference appliance dimension data, or verify layout parameters during estimation or build. We will refine the mobile experience based on early user feedback.",
      },
    ],
  },
  {
    heading: "Access and pricing",
    items: [
      {
        question: "How do I get early access?",
        answer:
          "You can join our waitlist for updates on availability, or request a demo to speak with our team directly. We are prioritising early access for design professionals, contractors, and homeowners with active renovation projects.",
      },
      {
        question: "What does KitchenAI360 cost?",
        answer:
          "Pricing has not been finalised. We are focused on building and testing the platform at this stage. Early access participants will be among the first to hear about pricing when it is confirmed.",
      },
      {
        question: "Is there a free version?",
        answer:
          "We have not decided on our pricing model yet. This is something we expect input from early users to inform.",
      },
    ],
  },
  {
    heading: "Data and privacy",
    items: [
      {
        question: "What data does KitchenAI360 collect?",
        answer:
          "When you submit a waitlist or demo request, we collect the contact information you provide. When you use the platform, we collect the project parameters you enter. We do not sell your data. See our Privacy Policy for the full details.",
      },
      {
        question: "Is my project data shared with anyone?",
        answer:
          "No. Project data you enter is used to process your review request. It is not shared with third parties, manufacturers, or advertisers. See our Privacy Policy for complete details.",
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="accent" className="mb-5">FAQ</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Honest answers about what KitchenAI360 is, what it is not, and
              where it is in development.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ groups */}
      <Section background="surface">
        <Container narrow>
          <div className="flex flex-col gap-12">
            {faqGroups.map((group) => (
              <div key={group.heading}>
                <h2 className="mb-4 text-lg font-bold text-navy-900">
                  {group.heading}
                </h2>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {group.items.map((faq, index) => (
                    <details
                      key={faq.question}
                      className={cn(
                        "group",
                        index < group.items.length - 1 && "border-b border-slate-200",
                      )}
                    >
                      <summary
                        className={cn(
                          "flex cursor-pointer list-none items-center justify-between px-6 py-4",
                          "text-sm font-medium text-navy-900 transition-colors duration-150 hover:bg-slate-50",
                          "[&::-webkit-details-marker]:hidden",
                        )}
                      >
                        {faq.question}
                        <span
                          className="ml-4 shrink-0 text-lg leading-none text-slate-400 transition-transform duration-200 group-open:rotate-45"
                          aria-hidden
                        >
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-5 pt-1">
                        <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Still have questions */}
      <Section background="white" size="sm">
        <Container narrow>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="font-semibold text-navy-900">Still have questions?</p>
            <p className="mt-2 text-sm text-slate-500">
              Reach out directly or request a demo to speak with our team.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                Contact us
              </Link>
              <Link
                href="/request-demo"
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                Request a Demo
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
