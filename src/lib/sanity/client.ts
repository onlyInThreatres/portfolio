import { createClient, ClientConfig, ClientPerspective } from 'next-sanity'

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-14',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published' as ClientPerspective,
  token: process.env.SANITY_API_TOKEN
}

export const client = createClient(config)

export async function sanityCheck() {
  try {
    const result = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))][0]`)
    return !!result
  } catch (error) {
    console.error('Sanity connection error:', error)
    return false
  }
} 