import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { existsSync } from 'fs'

const postsDirectory = path.join(process.cwd(), 'posts')

interface BlogPostData {
  slug: string
  title: string
  publishedAt: string
  content: string
  excerpt?: string
  tags?: string[]
}

export async function getAllPosts(): Promise<BlogPostData[]> {
  if (!existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        publishedAt: data.publishedAt || data.date,
        content,
        excerpt: data.excerpt,
        tags: data.tags,
      } as BlogPostData
    })
  )

  return allPostsData.sort((a, b) => (
    new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
  ))
}

export async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!existsSync(fullPath)) {
    return null
  }
  
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    publishedAt: data.publishedAt || data.date,
    content,
    excerpt: data.excerpt,
    tags: data.tags,
  }
}

