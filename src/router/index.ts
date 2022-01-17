import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const Login = () => import('../view/login/index.vue');
const Home = () => import('../view/home/index.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes //路由规则
})
export default router