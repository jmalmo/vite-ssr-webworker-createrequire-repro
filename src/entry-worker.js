import msg from 'dep-cjs-node-assert'

export default {
  async fetch() {
    return new Response(`Result: ${msg}`)
  },
}
