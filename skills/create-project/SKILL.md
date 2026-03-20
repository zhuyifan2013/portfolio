---
name: create-project
description: Create or update a project entry in this portfolio repo under src/content/projects. Use when the user wants a new project page or help filling project metadata such as description, status, stack, repo, demo, slug, and body content.
---

# Create Project

This skill is for project entries in this Astro portfolio.

## Target File

- Create a new file in `src/content/projects/`
- Use a kebab-case slug filename, usually English words, for example `image-pipeline-rebuild.md`
- Prefer `.md`

## Required Frontmatter

```yaml
---
title: "Project name"
description: "What it is and why it exists"
publishedAt: 2026-03-19
status: active
stack:
  - Astro
  - TypeScript
repo: "https://github.com/yourname/repo"
demo: "https://example.com"
tags:
  - web
---
```

Rules:

- `title` is required
- `publishedAt` is required and should use `YYYY-MM-DD`
- `description` is optional in schema but should usually be present because cards and detail pages depend on it
- `status` must be one of `active`, `maintenance`, `archived`
- `stack` should usually be filled with the main tools or platforms
- `repo` and `demo` are optional but must be valid URLs if present
- `tags` is optional

## Writing Rules

- Treat the frontmatter as the project card summary
- Use the body for details such as context, decisions, highlights, tradeoffs, and current state
- Keep the opening paragraph readable on its own
- Prefer real links only; omit `repo` or `demo` when they do not exist

## Workflow

1. Read one existing project entry if style is unclear
2. Choose the slug and create the file
3. Fill frontmatter carefully, especially `status`, `stack`, and URLs
4. Write a concise body that explains the project beyond the metadata
5. If possible, run `npm run build` after editing

## Do Not

- Do not leave placeholder links like `https://example.com`
- Do not invent unavailable repos or demos
- Do not move project facts into the body if they belong in frontmatter
