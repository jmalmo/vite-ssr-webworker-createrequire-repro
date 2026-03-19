# Reproduction: ssr.target 'webworker' emits createRequire(import.meta.url)

Minimal reproduction for [vitejs/vite issue](https://github.com/vitejs/vite/issues/21962).

## Steps

```bash
pnpm install
pnpm run build
pnpm run check   # shows createRequire in output
pnpm run preview  # crashes: TypeError: Received 'undefined'
```

## Expected

`ssr.target: 'webworker'` should not emit `createRequire(import.meta.url)` — it crashes on Cloudflare Workers where `import.meta.url` is undefined.
