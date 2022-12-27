import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = async () =>
    fs.readdirSync(path.join(root, "posts"));

export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(path.join(root, "posts", `${slug}.mdx`), "utf-8")

    const { data, content } = matter(mdxSource);

    const source = await serialize(content);

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        },
    };
};

export const getAllFilesFrontMatter = async () => {
    const files = await getFiles()

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(
            path.join(root, "posts", postSlug),
            "utf-8"
        );
        const { data } = matter(mdxSource);

        return [
            {
                ...data,
                slug: postSlug.replace(".mdx", ""),
            },
            ...allPosts,
        ];
    }, []);
};