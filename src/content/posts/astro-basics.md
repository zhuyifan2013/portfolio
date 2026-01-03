---
title: "Why Astro is perfect for a fast portfolio"
description: "Notes on choosing Astro for static content, mainland performance, and GitHub Actions deploys."
publishedAt: 2024-07-15
updatedAt: 2024-07-20
tags:
  - astro
  - static
  - china
draft: false
---

Astro ships zero-JS by default, which keeps first paint tiny even on slow networks. With content living in the repo, I can author Markdown or MDX locally, preview instantly via `npm run dev`, then publish via GitHub Actions without touching the server.

The build output is just HTML / CSS / JS under `dist/`, so the domestic server only needs Nginx + `rsync` to serve the files.

Key guardrails I use:

- Keep layout/components in `src/` and content in `src/content/`.
- Use frontmatter for metadata (title, description, tags, publishedAt).
- Avoid runtime databases—everything is versioned alongside the code.

```bash
npm install
npm run dev
```
