interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Injects a JSON-LD <script> tag into the page <head>.
 * Use inside generateMetadata or directly in a Server Component.
 *
 * Example:
 *   <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", ... }} />
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
