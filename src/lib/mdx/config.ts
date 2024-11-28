import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export interface MDXFrontmatter {
  title: string
  description: string
  date: string
  tags?: string[]
  published?: boolean
}

// This function will process our MDX content with useful plugins
export async function processMDX(content: string) {
  const { content: processedContent, frontmatter } = await compileMDX<MDXFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypePrism, // Syntax highlighting
          rehypeSlug,  // Adds IDs to headings
          [rehypeAutolinkHeadings, { behavior: 'append' }] // Adds anchor links
        ],
      },
    },
  })
  
  return { content: processedContent, frontmatter }
} 