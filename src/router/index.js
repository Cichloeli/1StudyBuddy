import Vue from 'vue'
import Router from 'vue-router'

import welcome from '@/components/welcome'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import profile from '@/components/profile'
import classes from '@/components/classes'
import dashboard from '@/components/dashboard'
import ViewUser from '@/components/ViewUser'
import editProfile from '@/components/editProfile'
import createGroup from '@/components/createGroup'
import profile_other from '@/components/profile_other'
import groups from '@/components/groupPage'
import setup from '@/components/setup'
import chat from '@/components/chat'
import classtest from '../../test/classtest'
import chattest from '../../test/chattest'


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
      redirect: '/welcome'
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
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: true
    }
    },
    {
      path: '/groups',
      name: 'groups',
      component: groups,
      meta: {
        requiresAuth: true
    }
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
      path: '/profile_other',
      name: 'profile_other',
      component: profile_other,
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
      path: '/ViewUser',
      name: 'ViewUser',
      component: ViewUser,
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
      path: '/setup',
      name: 'setup',
      component: setup,
      meta: {
        requiresAuth: true
    }
    },
   
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({name: 'Login'});
        }
      },
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
    {
      path: '/classtest',
      name: 'classtest',
      component: classtest,
      meta: {
        requiresAuth: true
    }
    },
    {
      path: '/chattest',
      name: 'chattest',
      component: chattest,
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
    else if (!requiresAuth && currentUser) next('home')
    else next()
})

export default router
