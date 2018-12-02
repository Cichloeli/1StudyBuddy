// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueChatScroll from 'vue-chat-scroll'
import store from "./store"

Vue.use(VueChatScroll)

Vue.config.productionTip = false

let app;
// firebase init goes here

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
})
/* eslint-disable no-new */

