import { createApi } from 'unsplash-js'

// Create Unsplash API instance
export const unsplash = createApi({
  accessKey: 'RCExhOI5HCsDF6m5_3jEEVOA-FJ6fg0VYrNG9EGryjE'
})

// Helper function to get project images
export async function getProjectImage(query: string): Promise<string> {
  try {
    const result = await unsplash.photos.getRandom({
      query,
      orientation: 'landscape',
    })
    
    if (result.type === 'success') {
      return result.response.urls.regular
    }
    
    // Fallback image if the request fails
    return `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=cover`
  } catch (error) {
    console.error('Error fetching Unsplash image:', error)
    return `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=cover`
  }
} 