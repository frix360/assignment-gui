import Vue from 'vue'
import App from './App.vue'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {adapter: Chart})

new Vue({
  el: '#app',
  render: h => h(App)
})
