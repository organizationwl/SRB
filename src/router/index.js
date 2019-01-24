import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index/Index'
import Add from '@/components/Add/Add'
import Shopping from '@/components/Shopping/Shopping'
import News from '@/components/News/News'
import Me from '@/components/Me/Me'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    }
    
  ]
})
