import Vue from 'vue'
import Router from 'vue-router'

import PlayersView from '@/views/players'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/players',
    },
    {
      name: 'players',
      path: '/players',
      component: PlayersView,
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
