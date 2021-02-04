// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { syncSend,asyncSend } from "../src/axios/index.js";
import url from '@/config/url/index.js';

Vue.config.productionTip = false


Vue.prototype.syncSend = syncSend;
Vue.prototype.asyncSend = asyncSend;
Vue.prototype.url = url;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
