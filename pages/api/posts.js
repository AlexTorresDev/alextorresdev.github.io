import { getAllFilesFrontMatter } from '../../lib/mdx'

export async function getAllPostsAPI(req, res) {
    const allPosts = await getAllFilesFrontMatter()
    res.status(200).json(allPosts)
}
