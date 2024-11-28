import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-14',
  useCdn: false,
  perspective: 'published',
  token: process.env.SANITY_API_TOKEN
})

export async function testSanityConnection() {
  try {
    const result = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))][0]`)
    console.log('Sanity connection test:', result)
    return true
  } catch (error) {
    console.error('Sanity connection error:', error)
    return false
  }
} 