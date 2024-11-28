import fs from 'fs/promises'
import path from 'path'
import { processMDX } from './mdx/config'
import type { BlogPost, BlogFrontmatter } from '@/types'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

// Calculate reading time for a post
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Get all blog posts with their metadata
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(POSTS_DIR)
    
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(POSTS_DIR, file)
          const fileContent = await fs.readFile(filePath, 'utf8')
          
          const { content, frontmatter } = await processMDX<BlogFrontmatter>(fileContent)
          const slug = file.replace('.mdx', '')
          
          return {
            ...frontmatter,
            slug,
            content,
            readingTime: calculateReadingTime(fileContent),
          }
        })
    )
    
    // Sort posts by date, newest first
    return posts
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error getting blog posts:', error)
    return []
  }
}

// Get posts by category
export async function getPostsByCategory(category: BlogCategory): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.category === category)
}

// Get all categories with post counts
export async function getCategories(): Promise<Array<{ name: BlogCategory; count: number }>> {
  const posts = await getAllPosts()
  const categories = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {} as Record<BlogCategory, number>)

  return Object.entries(categories).map(([name, count]) => ({
    name: name as BlogCategory,
    count
  }))
}

// Group posts by year
export function groupPostsByYear(posts: BlogPost[]): Record<string, BlogPost[]> {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<string, BlogPost[]>)
} 