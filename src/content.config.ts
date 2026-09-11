import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts: src/content/blog/<slug>.md
 * The filename becomes the URL: my-post.md -> /writing/my-post/
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts are hidden from listings and RSS in production builds but visible in `astro dev`.
    draft: z.boolean().default(false),
  }),
});

/**
 * Portfolio items: src/content/work/<slug>.md
 * Each file is one project. Body text is an optional longer description.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    role: z.string(),
    url: z.url(),
    summary: z.string(),
    // Lower numbers appear first.
    order: z.number().default(100),
  }),
});

export const collections = { blog, work };
