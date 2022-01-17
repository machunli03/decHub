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
  }
})
