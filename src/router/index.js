import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import profile from '@/components/profile'
import secure from '@/components/classes'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/classes',
      name: 'classes',
      component: secure,
      meta: {
        requiresAuth: true
        }
    }
  ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login')
    // where the login takes you
    else if (!requiresAuth && currentUser) next('profile')
    else next()
})

export default router