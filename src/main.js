import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

import VueRouter from 'vue-router'
import router from './router'

import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Vant)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
