import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      kicker: z.string().optional(),
      heading: z.string().optional(),
      sub: z.string().optional(),
      heroImage: image().optional(),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/home' }),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      imageAlt: z.string().default(''),
      imagePosition: z.string().default('center'),
      tone: z.enum(['plain', 'tint']).default('plain'),
      linkText: z.string().optional(),
      linkHref: z.string().optional(),
    }),
});

const referencer = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/referencer' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.string(),
      order: z.number(),
      excerpt: z.string(),
      photo: image().optional(),
    }),
});

export const collections = { pages, home, referencer };
