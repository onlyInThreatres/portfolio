import { client } from './sanity.client'
import { groq } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'

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
  body: PortableTextBlock[]
  estimatedReadTime: number
  category: string | null
}

export async function getPostBySlug(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    _type,
    title,
    excerpt,
    publishedAt,
    "slug": slug.current,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    body[] {
      ...,
      _type == "block" => {
        ...,
        children[] {
          ...,
          _type == "span" => {
            ...,
            text
          }
        }
      },
      _type == "image" => {
        ...,
        asset->
      }
    },
    category,
    "estimatedReadTime": coalesce(
      round(length(pt::text(body)) / 5 / 180),
      5
    )
  }`

  try {
    const post = await client.fetch(query, { slug })
    console.log('Raw Sanity Response:', JSON.stringify(post, null, 2))
    return post
  } catch (error) {
    console.error('Sanity Query Error:', error)
    throw error
  }
}

export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      _type,
      title,
      excerpt,
      publishedAt,
      "slug": slug.current,
      mainImage {
        asset-> {
          _id,
          url
        }
      },
      "estimatedReadTime": coalesce(
        round(length(pt::text(body)) / 5 / 180),
        5
      )
    }`
  )
}

export async function formatPost(): Promise<BlogPost> {
  throw new Error('Not implemented')
} 