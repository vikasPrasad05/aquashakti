import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional().default('Water Treatment'),
		tags: z.array(z.string()).optional().default([]),
		author: z.string().optional().default('Aqua Shakti Engineering Team'),
		readingTime: z.string().optional().default('5 min read'),
	}),
});

export const collections = { blog };

