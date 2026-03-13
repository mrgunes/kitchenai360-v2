import { compileMDX } from "next-mdx-remote/rsc"
import { mdxComponents } from "./mdx-components"

interface MdxRendererProps {
  source: string
}

/**
 * Async Server Component — compiles and renders MDX source with custom components.
 * Frontmatter is stripped automatically by compileMDX.
 */
export async function MdxRenderer({ source }: MdxRendererProps) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  })

  return (
    <div className="mx-auto max-w-prose">
      {content}
    </div>
  )
}
