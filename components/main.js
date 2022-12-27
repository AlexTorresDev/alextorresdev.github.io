import Link from "next/link";

export default function Main({ posts }) {
  return (
    <main className="flex-1 pr-16">
      <h3 className="mb-6">Publicaciones</h3>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/${post.slug}`}
          className="p-4 mb-4 block rounded-lg hover:bg-emerald-800 hover:bg-opacity-30"
        >
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </Link>
      ))}
    </main>
  )
}
