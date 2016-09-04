import Vue from 'vue'
import App from './App.vue'
var jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
new Vue({
  el: '#app',
  render: h => h(App)
})
