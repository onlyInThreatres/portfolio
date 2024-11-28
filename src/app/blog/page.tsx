import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'Blog | Your Name',
  description: 'Thoughts and insights on telecommunications, cloud architecture, and technology'
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <div className="container mx-auto px-4">
        <header className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights and tutorials about telecommunications, cloud architecture, and modern web development
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto">
          {/* Year sections */}
          {Object.entries(groupPostsByYear(posts)).map(([year, yearPosts]) => (
            <section key={year} className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-muted-foreground">
                {year}
              </h2>
              <div className="space-y-8">
                {yearPosts.map((post) => (
                  <BlogCard 
                    key={post.slug} 
                    post={post}
                    className="w-full backdrop-blur-xl"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

function groupPostsByYear(posts: Array<any>) {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<string, Array<any>>)
} 