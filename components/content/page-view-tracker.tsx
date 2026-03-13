"use client"

/**
 * Fires a named analytics event on mount.
 * Used in server-rendered content pages (blog, guides) to track article opens.
 * Renders nothing — pure side-effect component.
 */
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics/events"
import type { AnalyticsEventName, EventProperties } from "@/lib/analytics/events"

interface PageViewTrackerProps {
  event: AnalyticsEventName
  properties?: EventProperties
}

export function PageViewTracker({ event, properties }: PageViewTrackerProps) {
  useEffect(() => {
    trackEvent(event, properties)
    // Intentionally runs once on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
