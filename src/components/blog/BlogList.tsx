import { BlogCard } from './BlogCard'
import type { BlogPost } from '@/lib/blog'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
} 