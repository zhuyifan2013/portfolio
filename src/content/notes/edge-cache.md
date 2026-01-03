---
title: "Note: cache TTL for mainland users"
publishedAt: 2024-08-03
tags:
  - ops
  - cache
link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"
---

Edge cache should prefer small TTL (e.g., `s-maxage=600`) because deploys are cheap and static. If you add a CDN, keep Nginx as the origin with gzip/brotli and let the CDN handle TLS.
