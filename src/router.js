import Vue from 'vue'
import Router from 'vue-router'

import store from './store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'tracker',
    meta: {
      requiresAuth: true,
    },
    component: () => import('@/views/Tracker.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '*',
    redirect: '/',
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
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const { isAuthenticated } = store.getters

    if (!isAuthenticated) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router