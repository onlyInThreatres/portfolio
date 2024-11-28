export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  caseStudyUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NavLink {
  href: string
  label: string
} 