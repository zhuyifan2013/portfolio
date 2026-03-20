Edge cache should prefer small TTL (e.g., `s-maxage=600`) because deploys are cheap and static. If you add a CDN, keep Nginx as the origin with gzip/brotli and let the CDN handle TLS.
