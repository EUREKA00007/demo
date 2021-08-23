import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Games from '@/pages/games/Games'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    }
  ]
})
