import 'babel-polyfill'
import Vue from 'vue'

import App from './app.vue'

new Vue({
  el: '#app',
  functional: true,
  render: h => h(App),
})
