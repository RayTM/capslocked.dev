import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
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
