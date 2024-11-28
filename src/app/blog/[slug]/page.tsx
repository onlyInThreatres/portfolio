'use client'

import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

const components = {
  types: {
    image: ({value}: any) => {
      if (!value?.asset?.url) return null
      return (
        <div className="relative w-full h-[400px] my-8">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )
    },
  },
  block: {
    normal: ({children}: any) => <p className="mb-4">{children}</p>,
    h1: ({children}: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
  },
  marks: {
    strong: ({children}: any) => <strong>{children}</strong>,
    em: ({children}: any) => <em>{children}</em>,
    code: ({children}: any) => (
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