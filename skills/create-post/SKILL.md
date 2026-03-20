---
name: create-post
description: Create or update a long-form post in this portfolio repo under src/content/posts. Use when the user wants a new article, draft, MDX post, or help choosing post frontmatter, slug, preview opening, and article structure.
---

# Create Post

This skill is for long-form writing in this Astro portfolio.

## Target File

- Create a new file in `src/content/posts/`
- Use a kebab-case slug filename, usually English words, for example `astro-content-workflow.md`
- Default to `.md`
- Use `.mdx` only when the post needs MDX syntax or embedded components

## Required Frontmatter

```yaml
---
title: "Post title"
description: "One-line summary"
publishedAt: 2026-03-19
updatedAt: 2026-03-19
tags:
  - astro
  - content
draft: false
---
```

Rules:

- `title` is required
- `publishedAt` is required and should use `YYYY-MM-DD`
- `description` is optional in schema but should usually be present
- `updatedAt` is optional; set it when revising an existing published post
- `tags` is optional but should usually contain 2 to 5 meaningful tags
- `draft` defaults to `false`; set `draft: true` only if the user wants the post hidden from the list page

## Writing Rules

- Open with a strong first section; the posts list page renders the first several lines as preview
- Write in Markdown unless MDX is necessary
- Use headings, lists, and code fences when they make the article easier to scan
- Keep the body aligned with the title and description; avoid filler intros

## Workflow

1. Read `src/content.config.ts` or one existing post if you need a reminder on shape or style
2. Pick the slug and file extension
3. Write valid frontmatter
4. Draft the article body with a clear opening section
5. If possible, run `npm run build` after editing

## Do Not

- Do not leave `draft: true` unless the user asked for a draft
- Do not use `.mdx` without a concrete need
- Do not change collection schema for a one-off article
