import { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { marked } from 'marked'

marked.setOptions({
  headerIds: false,
  mangle: false,
})

export const get: APIRoute = async ({ params }) => {
  const siteUrl = new URL(import.meta.env.SITE)
  const slug = params.slug
  const blog = await getCollection('blog')


  if (slug) {
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
          attr: post.data.heroImage?.attribution && marked(post.data.heroImage?.attribution),
        },
        badge: post.data.badge,
        content: marked(post.body),
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200
      }
    )
  }

  return new Response(
    JSON.stringify({ message: 'Bad request' }),
    {
      headers: { "Content-Type": "application/json" },
      status: 400
    }
  )
}

export async function getStaticPaths() {
  const blog = await getCollection('blog')
  const paths = blog.map((post) => ({
    params: { slug: post.slug }
  }))

  return [paths]
}