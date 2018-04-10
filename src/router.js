import Vue from 'vue'
import Router from 'vue-router'

import Boards from '@/views/boards'
import Players from '@/views/playersList'
import Birthday from '@/views/Birthday'
import Yesterday from '@/views/Yesterday'
import Last from '@/views/Last'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'404',
      path: '*',
      component: Boards,
    },
    {
      name:'index',
      path: '/',
      component: Boards,
    },
    {
      name:'PlayersList',
      path: '/Players',
      component: Players,
    },
    {
      name:'Birthday',
      path: '/Birthday',
      component: Birthday,
    },
    {
      name:'Yesterday',
      path: '/Yesterday',
      component: Yesterday,
    },
    {
      name:'Last',
      path: '/Last',
      component: Last,
    }
  ],
})
