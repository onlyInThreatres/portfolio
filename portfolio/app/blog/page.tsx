import { getAllPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import type { BlogPost } from '@/types'

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <div className="container max-w-4xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights and tutorials about telecommunications, cloud architecture, and modern web development
          </p>
        </header>

        <div className="grid gap-8">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}

