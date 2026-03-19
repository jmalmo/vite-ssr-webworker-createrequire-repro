import msg from 'dep-cjs-node-assert'

addEventListener('fetch', (event) => {
  event.respondWith(new Response(`Result: ${msg}`))
})
