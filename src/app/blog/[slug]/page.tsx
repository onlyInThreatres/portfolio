import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog'
import { BlogPostContent } from '@/components/blog/BlogPostContent'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt || '',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <BlogPostContent post={post} />
    </main>
  )
} 