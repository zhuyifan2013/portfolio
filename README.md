# Portfolio / Blog (Astro)

静态站点：Astro + Markdown/MDX。内容和代码一起管理，GitHub Actions 构建，产物放到国内服务器 Nginx 目录 `/var/www/portfolio`。

## 本地开发

```bash
npm install   # 需要网络，安装 astro + mdx 依赖
npm run dev   # 本地预览
npm run build # 生成 dist/ 静态文件
```

## 内容结构

```
src/content/
├── posts/      # 长文章（Markdown/MDX），frontmatter: title/description/publishedAt/tags/draft
├── projects/   # 项目卡片，frontmatter: title/description/publishedAt/status/stack/repo/demo
└── notes/      # 短内容，frontmatter: title/publishedAt/tags/(link)
```

元数据在 `src/content.config.ts` 校验，新增文件只要符合 schema 即可。

## 部署思路

1. 推送到 GitHub
2. Actions 运行 `npm ci && npm run build`
3. `dist/` 同步到 `/var/www/portfolio`（rsync/scp）
4. Nginx 仅做静态托管（可加 HTTPS/缓存）
