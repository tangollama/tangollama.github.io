import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		subTitle: z.string().optional(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		excerpt: z.string().optional(),
		author: z.string().optional(),
		slug: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const talks = defineCollection({
	loader: glob({ base: './src/content/talks', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		subTitle: z.string().optional(),
		description: z.string().optional(),
		date: z.coerce.date().optional(),
		pubDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		excerpt: z.string().optional(),
		author: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, talks };
