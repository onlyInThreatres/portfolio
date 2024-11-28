import fs from 'fs/promises'
import path from 'path'
import { processMDX } from './mdx/config'
import type { MDXFrontmatter } from './mdx/config'
import type { ReactElement } from 'react'

export interface BlogPost extends MDXFrontmatter {
  slug: string
  content: ReactElement
  readingTime: string
  excerpt: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

// Generate excerpt from content
function generateExcerpt(content: string, maxLength = 160): string {
  const plainText = content.replace(/\s+/g, ' ').trim()
  if (plainText.length <= maxLength) return plainText
  return plainText.slice(0, maxLength).trim() + '...'
}

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
          
          const { content, frontmatter } = await processMDX(fileContent)
          const slug = file.replace('.mdx', '')
          
          return {
            slug,
            content,
            readingTime: calculateReadingTime(fileContent),
            excerpt: generateExcerpt(fileContent),
            ...frontmatter,
          } as BlogPost
        })
    )
    
    // Sort posts by date, newest first
    return posts
      .filter(post => post.published !== false) // Only return published posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error getting blog posts:', error)
    return []
  }
}

// Get a single post by its slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    const { content, frontmatter } = await processMDX(fileContent)
    
    if (!frontmatter.published) {
      return null
    }
    
    return {
      slug,
      content,
      readingTime: calculateReadingTime(fileContent),
      excerpt: generateExcerpt(fileContent),
      ...frontmatter,
    } as BlogPost
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.tags?.includes(tag))
}

// Get all unique tags from posts
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
} 