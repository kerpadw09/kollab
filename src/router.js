import Vue from 'vue'
import Router from 'vue-router'
import Analytics from '@/components/Pages/Analytics'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: 'analytics',
      name: 'Analytics',
      component: Analytics
    }
  ]
})
