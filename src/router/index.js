import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tools from '../views/ProductList.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/adminmarwanmohammedtoolxxchhdsf',
      name: 'Admin',
      component: Admin
    },
  ]
})

export default router
