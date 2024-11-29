import type { PortableTextBlock as SanityPortableTextBlock } from '@portabletext/types'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

export interface BlogPost {
  _id: string
  _type: string
  title: string
  slug: string
  excerpt: string | null
  publishedAt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
  }
  body: SanityPortableTextBlock[]
  estimatedReadTime: number
  category: string | null
}

export type BlogCategory = 
  | 'Cloud RAN'
  | '5G Technology'
  | 'Network Architecture'
  | 'Telecommunications'
  | 'Web Development'
  | 'Cloud Architecture'

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  category: BlogCategory
  tags: string[]
  published: boolean
} 