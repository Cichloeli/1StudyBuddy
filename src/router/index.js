import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import profile from '@/components/profile'
import classes from '@/components/classes'
import dashboard from '@/components/dashboard'
import viewUser from '@/components/ViewUser'
import editProfile from '@/components/editProfile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: editProfile
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/classes',
      name: 'classes',
      component: classes
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/viewUser',
      name: 'viewUser',
      component: viewUser
    },
  ]
})
