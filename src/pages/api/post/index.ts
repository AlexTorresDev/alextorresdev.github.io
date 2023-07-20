export const prerender = false

import { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import snarkdown from 'snarkdown'

export const get: APIRoute = async () => {
  const siteUrl = new URL(import.meta.env.SITE)
  const blog = await getCollection('blog')

  const posts = blog.map((post) => ({
    slug: `${siteUrl}api/post/${post.slug}`,
    link: `${siteUrl}blog/${post.slug}`,
    title: post.data.title,
    description: post.data.description,
    date: post.data.pubDate,
    image: {
      url: `${siteUrl}${post.data.heroImage?.source.slice(1)}`,
      attr: post.data.heroImage?.attribution && snarkdown(post.data.heroImage?.attribution),
    },
    tags: post.data.tags,
  }))

  if (posts) {
    return new Response(
      JSON.stringify(posts),
      {
        headers: { "Content-Type": "application/json" },
        status: 200
      }
    )
  }

  return new Response(
    JSON.stringify({ message: 'No posts' }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200
    }
  )
}