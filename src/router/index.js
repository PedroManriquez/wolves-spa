import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Breeds from '@/components/Breed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wolves-index',
      component: HelloWorld
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
    }
  ]
})
