import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DevApply from '@/views/ApplyDeveloper.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/apply/developer',
      name: 'apply',
      component: DevApply,
    },
    {
      path: '/login',
      name: 'logn',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ]
})

export default router
