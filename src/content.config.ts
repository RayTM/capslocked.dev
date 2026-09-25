import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /* ISO in, DD.MM.YYYY out (see formatDate in src/data/posts.ts) — the regex
       makes a wrongly written date a build error instead of a stray format. */
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be ISO: YYYY-MM-DD'),
    category: z.string(),
    icon: z.string().optional(),
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    dateRange: z.string(),
    category: z.string(),
    highlighted: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    links: z.array(z.object({
      href: z.string(),
      label: z.string(),
      description: z.string(),
      icon: z.string().optional(),
      external: z.boolean().default(false),
    })).default([]),
  }),
});

export const collections = { blog, projects };
