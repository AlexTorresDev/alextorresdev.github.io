import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { getFiles, getFileBySlug } from "../lib/mdx"
import MDXComponents from "../components/MDXComponents"

export default function Post({ source, frontmatter }) {
  return (
      <div>
        <Head>
          <title>{frontmatter.title} - AlexTorresDev</title>
        </Head>
        <Header />
        <article>
        <MDXRemote {...source} components={MDXComponents} />
      </article>
      <Footer/>
      </div>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles()
  
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  }
}