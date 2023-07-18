import { z, defineCollection, reference } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.object({
            source: z.string(),
            attribution: z.string().optional(),
        }).optional(),
        tags: z.array(z.string()).optional(),
        relatedPosts: z.array(reference('blog')).optional(),
    })
});

export const collections = { blog }