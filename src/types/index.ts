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
  body: any[] // TODO: Type this properly with Portable Text types
  estimatedReadTime: number
  category: string | null
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

export interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

export interface BlogCardProps {
  post: BlogPost
} 