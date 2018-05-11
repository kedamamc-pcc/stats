import Vue from 'vue'
import Router from 'vue-router'

import Boards from '@/views/boards'
import Players from '@/views/playersList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      component: Boards,
    },
    {
      name: 'players',
      path: '/players',
      component: Players,
    },
    {
      name: 'birthdays',
      path: '/birthdays',
      component: () => import('@/views/birthdays'),
    },
    {
      name: 'yesterday',
      path: '/yesterday',
      component: () => import('@/views/yesterday'),
    },
    {
      name: 'newbies',
      path: '/newbies',
      component: () => import('@/views/newbies'),
    },
    {path: '*', redirect: '/'},
  ],
})
