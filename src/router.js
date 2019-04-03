import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tracker',
      component: () => import('@/views/Tracker.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/login',
      name: 'about',
      component: () => import('@/views/Login.vue'),
    },
    // {
    //   path: '/404',
    //   name: '404',
    //   component: () => import('@/views/404Page'),
    // },
    // {
    //   path: '*',
    //   redirect: '/404',
    // },
  ],
})
