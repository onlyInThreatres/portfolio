import fs from 'fs'
import path from 'path'
import { MDXFrontmatter } from './config'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export async function getAllMDXFiles(directory: string) {
  const dirPath = path.join(CONTENT_DIR, directory)
  const files = fs.readdirSync(dirPath)
  
  return files.filter(file => file.endsWith('.mdx'))
}

export async function getMDXContent(directory: string, filename: string) {
  const filePath = path.join(CONTENT_DIR, directory, filename)
  const content = fs.readFileSync(filePath, 'utf8')
  return content
}

export function sortByDate(a: { frontmatter: MDXFrontmatter }, b: { frontmatter: MDXFrontmatter }) {
  return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
} 