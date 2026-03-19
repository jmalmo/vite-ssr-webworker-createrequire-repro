import { defineConfig, defaultClientConditions } from 'vite'

export default defineConfig({
  build: { minify: false },
  ssr: {
    target: 'webworker',
    noExternal: true,
    external: ['node:assert'],
    resolve: {
      conditions: [...defaultClientConditions, 'worker'],
    },
  },
})
