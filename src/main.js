import Vue from 'vue';

import './assets/scss/main.scss';

import './include/bootstrap';

import App from './App.vue';
import router from './include/router';
import store from './include/store';

import './include/data';
import './include/components';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
