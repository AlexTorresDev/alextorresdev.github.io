import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import Header from "../components/page/Header"
import Footer from "../components/page/Footer"
import { getFiles, getFileBySlug } from "../lib/mdx"
import MDXComponents from "../components/mdx/MDXComponents"
import Sidebar from "../components/page/Sidebar"

export default function Post({ source, frontmatter }) {
  return (
    <div className="min-h-screen px-6 py-3 md:px-0">
      <Head>
        <title>{frontmatter.title} - AlexTorresDev</title>
      </Head>
      <Header />
      <div className="flex place-content-center">
        <div className="flex container">
          <article className="flex-1 pr-16">
            <MDXRemote {...source} components={MDXComponents} />
          </article>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div >
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