import Link from "next/link";
import icons from "../../utils/icons";

export default function Main({ posts }) {
  const getIcon = (tags) => {
    const iconsA = tags.map(tag => icons.find(icon => icon.name === tag))
    const color = iconsA[0].color
    const icon = iconsA[0].icon
    return { color, icon }
  }

  return (
    <main className="flex-1 pr-16">
      <h3 className="font-medium text-2xl mb-8">Artículos</h3>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/${post.slug}`}
          className="flex items-center gap-3 p-4 mb-5 rounded-lg hover:bg-[#027dfd] hover:bg-opacity-10 bg-black bg-opacity-10 shadow-sm hover:scale-[1.02] transition-all"
        >
          {
            <div className="w-12 p-2 rounded-t rounded-b" style={{
              backgroundColor: getIcon(post.tags).color
            }}>
              {getIcon(post.tags).icon}
            </div>
          }
          <div>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </div>
        </Link>
      ))
      }
    </main >
  )
}