# Reproduction: ssr.target 'webworker' emits createRequire(import.meta.url)

Minimal reproduction for a Vite bug where `ssr.target: 'webworker'` still defaults Rolldown SSR builds to `platform: 'node'`, causing `createRequire(import.meta.url)` to be emitted in the output.

## Steps

```bash
pnpm install
pnpm run build
pnpm run check    # shows createRequire(import.meta.url) in output
pnpm run preview  # crashes: TypeError: Received 'undefined'
```

## Error

```
Uncaught TypeError: The argument 'path' must be a file URL object, a file URL string,
or an absolute path string. Received 'undefined'
  at createRequire (node:module:34:15)
```

## Expected

`ssr.target: 'webworker'` should not emit `createRequire(import.meta.url)` — it crashes on Cloudflare Workers where `import.meta.url` is undefined.
