import Link from 'next/link'
import { format } from 'date-fns'
import type { BlogPost } from '@/lib/blog'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  const {
    title,
    description,
    date,
    readingTime,
    slug,
    tags = []
  } = post

  return (
    <article 
      className={cn(
        "group relative rounded-xl",
        "bg-card/30 border border-muted",
        "hover:border-primary/50 transition-all",
        className
      )}
    >
      <Link href={`/blog/${slug}`} className="block p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={date}>
                {format(new Date(date), 'MMMM d, yyyy')}
              </time>
              <span>·</span>
              <span>{readingTime}</span>
            </div>
          </div>

          <p className="text-muted-foreground line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
} 