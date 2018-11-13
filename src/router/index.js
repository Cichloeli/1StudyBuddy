import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import profile from '@/components/profile'
import classes from '@/components/classes'
import dashboard from '@/components/dashboard'
import viewUser from '@/components/ViewUser'
import editProfile from '@/components/editProfile'
import createGroup from '@/components/createGroup'

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
      path: '/editProfile',
      name: 'editProfile',
      component: editProfile,
      meta: {
        requiresAuth: true
    }
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
      component: classes,
      meta: {
        requiresAuth: true
      }  
    },
    {
      path: '/view-user',
      name: 'viewUser',
      component: viewUser,
      meta: {
        requiresAuth: true
    }
    },
    {
      path: '/createGroup',
      name: 'create_a_Group',
      component: createGroup,
      meta: {
        requiresAuth: true
    }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: {
        requiresAuth: true
    }
    },
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