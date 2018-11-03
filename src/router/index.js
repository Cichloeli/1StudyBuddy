import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import profile from '@/components/profile'
import secure from '@/components/classes'



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
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/classes',
      name: 'classes',
      component: secure
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
    }
  ]
})
