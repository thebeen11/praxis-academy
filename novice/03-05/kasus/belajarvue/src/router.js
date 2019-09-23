import Vue from 'vue'
import Router from 'vue-router'
import grid from './views/grid.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/modal',
      name: 'modal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "modal" */ './views/modal.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "grid" */ './views/grid.vue')
    },
    {
      path: '/validation',
      name: 'validation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "validation" */ './views/validation.vue')
    },


  ]
})
