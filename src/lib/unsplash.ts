import { createApi } from 'unsplash-js'

export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || ''
})

export async function getProjectImage(query: string): Promise<string> {
  try {
    const result = await unsplash.photos.getRandom({
      query,
      orientation: 'landscape',
    })
    
    if (result.type === 'success' && !Array.isArray(result.response)) {
      return result.response.urls.regular
    }
    
    return `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=cover`
  } catch (error) {
    console.error('Error fetching Unsplash image:', error)
    return `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=cover`
  }
} 