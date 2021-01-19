import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./components/Dashboard')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('./components/Add')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('./components/Edit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
