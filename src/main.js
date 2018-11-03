// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDWF4Pnu3mBt56EqNwJhHhynhTDQJSMudI",
  authDomain: "studybuddy-4b778.firebaseapp.com",
  databaseURL: "https://studybuddy-4b778.firebaseio.com",
  projectId: "studybuddy-4b778",
  storageBucket: "studybuddy-4b778.appspot.com",
  messagingSenderId: "627613848052"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
