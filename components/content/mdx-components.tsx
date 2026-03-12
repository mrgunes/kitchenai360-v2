import type { MDXComponents } from "mdx/types"
import Link from "next/link"

/**
 * Custom MDX element mappings — uses design system tokens.
 * No @tailwindcss/typography dependency.
 */
export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="mb-6 mt-12 text-3xl font-bold leading-tight tracking-tight text-navy-900 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 text-2xl font-bold leading-snug text-navy-900">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-navy-900">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-2 mt-6 text-base font-semibold text-navy-800">
      {children}
    </h4>
  ),

  // Body
  p: ({ children }) => (
    <p className="mb-5 leading-relaxed text-slate-700">{children}</p>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="mb-5 ml-6 list-disc space-y-1.5 text-slate-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 ml-6 list-decimal space-y-1.5 text-slate-700">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Inline
  strong: ({ children }) => (
    <strong className="font-semibold text-navy-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,

  // Code
  code: ({ children }) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-navy-800">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-5 overflow-x-auto rounded-lg bg-navy-950 p-4 text-sm text-slate-200">
      {children}
    </pre>
  ),

  // Block
  blockquote: ({ children }) => (
    <blockquote className="mb-5 border-l-4 border-accent-500 pl-4 text-slate-600 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-slate-200" />,

  // Table
  table: ({ children }) => (
    <div className="mb-5 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
  th: ({ children }) => (
    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-navy-900">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-slate-200 px-3 py-2 text-slate-700">{children}</td>
  ),

  // Links — internal links use Next.js Link
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith("/")
    if (isInternal && href) {
      return (
        <Link href={href} className="font-medium text-accent-600 underline underline-offset-2 hover:text-accent-700">
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className="font-medium text-accent-600 underline underline-offset-2 hover:text-accent-700"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  },
}
