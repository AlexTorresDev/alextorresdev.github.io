import { getFileBySlug } from "../../../lib/mdx"

export default async function handler(req, res) {
    const post = await getFileBySlug(req.query.slug)

    res.status(200).json(post);
}
