import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "about" */ './views/Grid.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import(/* webpackChunkName: "about" */ './views/Cards.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "about" */ './views/Form.vue')
    }
  ]
})
