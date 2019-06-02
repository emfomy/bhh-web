import Vue from 'vue';

import './assets/scss/main.scss';

import './include/bootstrap';

import App from './App.vue';
import router from './include/router';
import store from './include/store';

import './include/data';
import './include/components';

Vue.config.productionTip = false;

Vue.prototype.$publicPath = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
