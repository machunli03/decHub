import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/view/login/index.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/view/login/index.vue')
  // }
]
const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes //路由规则
})
export default router