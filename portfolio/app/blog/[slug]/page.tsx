import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Mustafa Hassan's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Mustafa Hassan'],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Mustafa Hassan',
    },
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time dateTime={post.date} className="text-gray-600 mb-8 block">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          className="mb-8 rounded-lg"
          width={1200}
          height={800}
        />
      )}
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  )
}

