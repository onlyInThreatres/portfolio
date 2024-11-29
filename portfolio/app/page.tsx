import { getAllPosts } from '@/lib/blog'
import type { BlogPost } from '@/types'

export default async function HomePage() {
  const posts = await getAllPosts()
  // ... rest of component
}

