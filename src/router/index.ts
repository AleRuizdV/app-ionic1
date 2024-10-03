import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import StoragePj from '../views/StoragePj.vue'
import PagPjTest from '../views/PagPjTest.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/storage',
    name: 'StoragePj',
    component: StoragePj
  },
  {
    path: '/pagpjTest',
    name: 'PagPjTest',
    component: PagPjTest
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
