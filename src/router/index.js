import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import VueInfo from '@/components/VueInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vue-info',
      name: 'VueInfo',
      component: VueInfo,
      meta: {
        title: 'Vue Info'
      }
    },
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        title: 'Homepage'
      }
    }
  ]
})
