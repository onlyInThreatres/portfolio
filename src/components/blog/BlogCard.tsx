import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blog'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  const {
    title,
    excerpt,
    publishedAt,
    slug,
    mainImage,
    estimatedReadTime = 5 // Default to 5 min if not calculated
  } = post

  return (
    <article 
      className={cn(
        "group rounded-xl overflow-hidden",
        "bg-card border border-muted",
        "hover:border-primary/50 transition-all",
        "flex flex-col md:flex-row",
        className
      )}
    >
      {mainImage && (
        <div className="relative w-full md:w-72 h-48">
          <Image
            src={mainImage.asset.url}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex-1 p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>·</span>
          <span>{estimatedReadTime} min read</span>
        </div>
        
        <Link href={`/blog/${slug}`}>
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h2>
        </Link>

        {excerpt && (
          <p className="text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>
    </article>
  )
} 