import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Your Name'],
      tags: post.tags,
    },
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <article className="container max-w-3xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-pre:bg-muted prose-pre:border prose-pre:border-muted">
          {post.content}
        </div>

        <footer className="mt-16 pt-8 border-t border-muted">
          <Link 
            href="/blog"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  )
} 