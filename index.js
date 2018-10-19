import Vue from 'vue';
//import MainContent from './views/main-content';

import MainContent from './views/login.vue';

let MainComponent = Vue.extend(MainContent);

//new MainComponent().$mount("#mainContent");

new MainComponent().$mount("#loginPage");