"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils/cn"

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/use-cases",    label: "Use Cases" },
  { href: "/standards",    label: "Standards" },
  { href: "/blog",         label: "Blog" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-base font-bold tracking-tight text-navy-900 hover:text-navy-800 transition-colors duration-150"
          >
            KitchenAI360
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                  isActive(link.href)
                    ? "text-navy-900 bg-navy-50"
                    : "text-navy-700 hover:text-navy-900 hover:bg-navy-50",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/waitlist"
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              Join Waitlist
            </Link>
            <Link
              href="/request-demo"
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-md p-2 text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors duration-150"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-200 bg-white"
        >
          <Container>
            <nav
              className="flex flex-col gap-0.5 py-3"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                    isActive(link.href)
                      ? "text-navy-900 bg-navy-50"
                      : "text-navy-700 hover:text-navy-900 hover:bg-navy-50",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3 pb-1">
                <Link
                  href="/waitlist"
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({ variant: "secondary", size: "md", className: "w-full" })}
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/request-demo"
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({ variant: "primary", size: "md", className: "w-full" })}
                >
                  Request Demo
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
