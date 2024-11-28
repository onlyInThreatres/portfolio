export interface BlogPost {
  title: string
  slug: string
  description: string
  date: string
  readingTime: string
  tags: string[]
  published: boolean
  content: React.ReactNode
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