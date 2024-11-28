import { createClient } from 'next-sanity'

// Environment variables
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-14'

// Client configuration
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  // Include token only if it exists
  ...(process.env.SANITY_API_TOKEN && {
    token: process.env.SANITY_API_TOKEN
  })
})

// Utility function to check connection
export async function sanityCheck() {
  try {
    const result = await client.fetch(`*[_type == "post"][0]`)
    console.log('Sanity connection successful:', !!result)
    return true
  } catch (error) {
    console.error('Sanity connection error:', error)
    return false
  }
} 