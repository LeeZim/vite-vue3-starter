import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import sidenav from '@/components/sidenav.vue'
import s29 from '@/views/s29.vue'
// import s30 from '@/views/s30.vue'
// eslint-disable-next-line
import s30_1 from '@/views/s30/s30_1.vue'
// eslint-disable-next-line
import s30_2 from '@/views/s30/s30_2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/s29',
    name: 's29',
    components: {
      router_main: s29
    }
  },
  {
    path: '/s30',
    name: 's30',
    redirect: '/s30_1'
  },
  {
    path: '/s30_1',
    name: 's30_1',
    components: {
      router_main: s30_1,
      router_aside: sidenav
    }
  },
  {
    path: '/s30_2',
    name: 's30_2',
    components: {
      router_main: s30_2,
      router_aside: sidenav
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
