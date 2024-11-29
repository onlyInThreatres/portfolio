import Link from 'next/link'

export default function BlogNotFound() {
  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t find the blog post you&apos;re looking for.
        </p>
        <Link 
          href="/blog"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  )
} 