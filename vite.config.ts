import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 注意：在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块：npm i -D @types/node
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,//端口号
    host: true,//ip地址 或 '0.0.0.0' 或 "loaclhost"
    open: true, //启动后是否自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
