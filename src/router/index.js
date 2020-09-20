import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    alias: '/index'   //别名
  },
  {
    path: '/home',
    redirect: '/'  //重定向
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/Sort.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import('../views/Buy.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../components/Search.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
