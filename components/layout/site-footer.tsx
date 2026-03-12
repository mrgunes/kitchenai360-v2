import Link from "next/link"
import { Container } from "@/components/layout/container"

const productLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/use-cases",    label: "Use Cases" },
  { href: "/standards",    label: "Standards" },
  { href: "/manufacturers", label: "Manufacturers" },
]

const resourceLinks = [
  { href: "/blog",   label: "Blog" },
  { href: "/guides", label: "Guides" },
  { href: "/faq",    label: "FAQ" },
]

const companyLinks = [
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms",   label: "Terms of Service" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-base font-bold text-navy-900 tracking-tight">
                  KitchenAI360
                </span>
              </Link>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs">
                AI-assisted kitchen planning for designers, contractors, and
                homeowners. Early-stage platform — currently in development.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Product
              </p>
              <ul className="flex flex-col gap-2.5">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-navy-900 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Resources
              </p>
              <ul className="flex flex-col gap-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-navy-900 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-navy-900 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} KitchenAI360. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-navy-900 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
