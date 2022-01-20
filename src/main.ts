import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 加载全局样式
import './style/index.scss'

createApp(App)
  .use(router)
  .use(store, key)
  .use(ElementPlus)
  .mount('#app')
