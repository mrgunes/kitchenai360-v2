/**
 * Analytics event tracker.
 *
 * Wraps Vercel Analytics `track()` for named events.
 * Optionally fires GA4 events when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 *
 * Call only from "use client" components.
 */
import { track } from "@vercel/analytics"

export type AnalyticsEventName =
  | "waitlist_submitted"
  | "demo_requested"
  | "contact_submitted"
  | "blog_article_opened"
  | "guide_article_opened"

export type EventProperties = Record<string, string | number | boolean | null | undefined>

/**
 * Track a named event. Never throws — errors are caught and warned.
 */
export function trackEvent(name: AnalyticsEventName, properties?: EventProperties): void {
  // Vercel Analytics
  try {
    track(name, properties)
  } catch (err) {
    console.warn("[analytics] Vercel track failed:", err)
  }

  // Optional GA4 — only fires if measurement ID and gtag are present
  try {
    if (
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
      typeof window !== "undefined" &&
      typeof (window as { gtag?: unknown }).gtag === "function"
    ) {
      ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, properties ?? {})
    }
  } catch {
    // GA4 not configured or unavailable — silent
  }
}
