/// <reference types="vite/client" />

declare module '*.md' {
  import type { Component } from 'vue'
  const component: Component
  export default component
}

declare module '*.md' as string {
  const src: string
  export default src
}
