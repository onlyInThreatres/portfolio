import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import type { PortableTextReactComponents } from '@portabletext/react'

interface ComponentProps {
  value: {
    asset?: {
      url: string
    }
    alt?: string
  }
  children?: React.ReactNode
}

interface PortableTextProps {
  children?: React.ReactNode
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: PortableTextProps) => <p className="mb-4">{children}</p>,
    h1: ({ children }: PortableTextProps) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: PortableTextProps) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: PortableTextProps) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
  },
  marks: {
    strong: ({ children }: PortableTextProps) => <strong>{children}</strong>,
    em: ({ children }: PortableTextProps) => <em>{children}</em>,
    code: ({ children }: PortableTextProps) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <article className="container max-w-3xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-4">{post.excerpt}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
            <span>·</span>
            <span>{post.estimatedReadTime} min read</span>
          </div>
        </header>

        {post.mainImage && (
          <div className="relative w-full h-[400px] mb-12">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={post.body} components={components} />
        </div>
      </article>
    </main>
  )
} 