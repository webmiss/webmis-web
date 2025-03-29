import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Markdown from 'vite-plugin-md'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      markdownItOptions: {
        html: true,          // 允许 HTML 标签
        linkify: true,       // 自动转换 URL 为链接
        typographer: true    // 优化排版符号
      },
    }),
  ],
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, 'src'),
    }  
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "./src/assets/style/themes.less";`,  // 注入全局变量
        javascriptEnabled: true
      }
    }
  }
})
