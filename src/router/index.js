import Vue from 'vue'
import Router from 'vue-router'
import Breeds from '@/components/Breed/Breed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'wolves-index',
      redirect: {name: 'breeds'}
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
    }
  ]
})
