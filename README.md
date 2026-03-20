# Yifan Zhu Portfolio

一个基于 Astro 的个人站点，内容和代码都放在仓库里维护。站点目前分成三条内容流：

- `posts`：长文章，支持 Markdown 和 MDX
- `notes`：短笔记，直接在列表页展示全文
- `projects`：结构化项目页，展示状态、技术栈、链接和正文

## Tech Stack

- Astro 4
- `@astrojs/mdx`
- Astro Content Collections
- Markdown / MDX

## Local Development

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

其中 `npm run lint` 实际执行的是 `astro check`。

## Project Structure

```text
.
├── src/
│   ├── components/        # 首页和列表页组件
│   ├── content/           # 所有内容源文件
│   │   ├── notes/
│   │   ├── posts/
│   │   └── projects/
│   ├── layouts/
│   ├── pages/             # 首页、列表页、详情页路由
│   └── content.config.ts  # 三个 collection 的 schema
├── skills/                # 为这个仓库写的内容创建技能
└── README.md
```

文件名会成为 URL slug，例如：

- `src/content/posts/astro-basics.md` -> `/posts/astro-basics/`
- `src/content/notes/writing-flow.md` -> `/notes/writing-flow/`
- `src/content/projects/portfolio-reboot.md` -> `/projects/portfolio-reboot/`

## Content Model

schema 定义集中在 [src/content.config.ts](/Users/yifan_zhu/repo/portfolio/src/content.config.ts)。

### Posts

目录：`src/content/posts/`

建议默认使用 `.md`，只有需要 MDX 能力时再用 `.mdx`。

```yaml
---
title: "Article title"
description: "One-line summary"
publishedAt: 2026-03-19
updatedAt: 2026-03-19
tags:
  - astro
  - content
draft: false
---
```

说明：

- `title`、`publishedAt` 必填
- `description`、`updatedAt` 可选
- `tags` 默认空数组
- `draft` 默认 `false`
- 列表页只展示非 `draft` 文章
- 列表页会取正文前几行作为预览，所以开头段落要能单独成立

### Notes

目录：`src/content/notes/`

说明：

- note 不需要 frontmatter，直接写 Markdown 正文即可
- 列表页和详情页都依赖文件内容本身，不依赖标题、标签或外链字段
- 排序和时间展示来自 note 文件的文件时间；当前按创建时间倒序并展示创建时间
- notes 列表页会直接渲染全文，因此正文应保持短、直接、信息密度高

### Projects

目录：`src/content/projects/`

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

说明：

- `title`、`publishedAt` 必填
- `description` 强烈建议填写，首页和列表页都会用到
- `status` 只能是 `active`、`maintenance`、`archived`
- `stack`、`tags` 默认空数组
- `repo`、`demo` 必须是合法 URL（如果提供）

## Routing

- `/`：首页，聚合 posts / notes / projects
- `/posts/`：文章列表
- `/posts/[slug]/`：文章详情
- `/notes/`：笔记流
- `/notes/[slug]/`：笔记详情
- `/projects/`：项目列表
- `/projects/[slug]/`：项目详情

## Content Workflow

新增内容时通常只需要：

1. 在对应 collection 目录下创建一个新文件
2. 按对应 collection 的规则填写 frontmatter，或在 note 中直接写正文
3. 写正文
4. 本地运行 `npm run build` 检查

如果你在 Codex 里工作，可以直接使用仓库内置技能：

- `skills/create-note/`
- `skills/create-post/`
- `skills/create-project/`

## Deploy

当前仓库的部署思路是静态构建：

1. 本地或 CI 执行 `npm ci && npm run build`
2. 生成 `dist/`
3. 将 `dist/` 同步到服务器上的静态目录
4. 用 Nginx 托管静态产物

这个仓库本身不依赖数据库，也不需要线上 Node runtime。
