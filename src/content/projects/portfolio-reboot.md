---
title: "Aha Portfolio rebuild with Astro"
description: "Static-first rebuild targeting mainland performance, GitHub Actions pipeline, and Nginx hosting."
publishedAt: 2024-07-10
status: active
stack:
  - Astro
  - Markdown
  - GitHub Actions
  - Nginx
repo: "https://github.com/yourname/portfolio"
demo: "https://example.com"
tags:
  - web
  - content
---

This project reorganizes content into collections (`posts`, `projects`, `notes`) and ships purely static assets. I kept the styling intentionally minimal to stay maintainable over the long term.

Highlights:

- Astro + MDX for composable layouts.
- Content collections validated via `src/content.config.ts`.
- CI builds + deploys using GitHub Actions → domestic server.
