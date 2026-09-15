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
 * Each file is one project. The Markdown body is the description, so links and
 * inline code work there.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    url: z.url(),
    // Tools or platforms used. Shown as a short line under the description.
    tools: z.array(z.string()).default([]),
    // Lower numbers appear first.
    order: z.number().default(100),
  }),
});

export const collections = { blog, work };
