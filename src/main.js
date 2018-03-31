import Vue from 'vue'
import App from './app.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import 'normalize.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

axios.interceptors.response.use(res => res.data)

new Vue({
  router,
  store,
  ...App,
}).$mount('#app')
