export const prerender = false

import { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import snarkdown from 'snarkdown'

export const get: APIRoute = async ({ params }) => {
  const siteUrl = new URL(import.meta.env.SITE)
  const slug = params.slug
  const blog = await getCollection('blog')


  if (!slug) {
    return new Response(
      JSON.stringify({ message: 'Bad request' }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400
      }
    )
  }

  const post = blog.find((post) => post.slug === slug)

  if (!post) {
    return new Response(
      JSON.stringify({ message: 'Not found' }),
      {
        headers: { "Content-Type": "application/json" },
        status: 404
      }
    )
  }

  return new Response(
    JSON.stringify({
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
      content: snarkdown(post.body),
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200
    }
  )
}
