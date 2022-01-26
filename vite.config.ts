import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')//配置模块路径别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      //'/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        target: 'http://172.16.30.174:3335',//代理的目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
