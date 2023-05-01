import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.string().optional(),
        heroImage: z.string().optional(),
        badge: z.string().optional(),
    })
});

export const collections = { blog }