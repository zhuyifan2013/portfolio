---
name: create-note
description: Create or update a note in this portfolio repo under src/content/notes. Use when the user wants a new short note, a note rewrite, or help choosing the note filename and concise Markdown body.
---

# Create Note

This skill is for short-form notes in this Astro portfolio.

## Target File

- Create a new file in `src/content/notes/`
- Use a kebab-case slug filename, usually English words, for example `cdn-cache-basics.md`
- Prefer `.md`; do not use `.mdx` unless the user explicitly needs MDX features

## Note Format

- Do not add frontmatter
- Write plain Markdown body only
- The notes pages read the file content directly
- Note ordering and timestamps come from the file system, not from metadata fields
- Notes are ordered by file creation time, newest first, and the UI also shows creation time

## Writing Rules

- Keep the body short and direct; the notes list page renders the full note body
- Prefer one to four short paragraphs, or a compact list when the content is operational
- Preserve the user's wording when they already gave raw text
- If the user gives a URL, fold it into the body as a normal Markdown link instead of using metadata

## Workflow

1. Read one existing file in `src/content/notes/` if style is unclear
2. Choose a slug that matches the note topic
3. Create a Markdown file with body content only
4. Keep the note concise and scannable
5. If possible, run `npm run build` after editing

## Do Not

- Do not add `title`, `publishedAt`, `tags`, or `link` frontmatter
- Do not edit `src/content.config.ts` unless the user asked to change the note schema
- Do not write a long essay here; that belongs in `posts`
