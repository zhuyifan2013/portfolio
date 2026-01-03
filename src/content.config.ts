import { defineCollection, z } from 'astro:content';

const baseFields = {
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  publishedAt: z.date(),
};

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFields,
    updatedAt: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFields,
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['active', 'maintenance', 'archived']).default('active'),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
  }),
});

export const collections = { posts, projects, notes };
