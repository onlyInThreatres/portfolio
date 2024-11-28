import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { existsSync } from 'fs'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getBlogPosts() {
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
        ...data,
        content,
      }
    })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!existsSync(fullPath)) {
    return null
  }
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    ...data,
    content,
  }
}

