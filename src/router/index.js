import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import VueInfo from '@/components/VueInfo'
import Organizations from '@/components/Organizations'
import MemberLogin from '@/components/MemberLogin'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        title: 'Homepage'
      }
    },
    {
      path: '/orgs',
      name: 'Organizations',
      component: Organizations,
      meta: {
        title: 'Organizations'
      }
    },
    {
      path: '/vue-info',
      name: 'VueInfo',
      component: VueInfo,
      meta: {
        title: 'Vue Info'
      }
    },
    {
      path: '/member-login',
      name: 'MemberLogin',
      component: MemberLogin,
      meta: {
        title: 'Member Login'
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
