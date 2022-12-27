import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../lib/mdx";

export default function Post({ source, frontmatter }) {
  return (
      <article>
        <Head>
          <title>{frontmatter.title} - AlexTorresDev</title>
        </Head>
        <MDXRemote {...source} />
      </article>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
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
  };
}