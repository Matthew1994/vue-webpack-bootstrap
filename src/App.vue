<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <comfirm></comfirm>
  </div>
</template>

<script>
var comfirm = require('./components/comfirm.vue');
export default {
  data: function(){
    return {
      msg: 'Vue t'
    }
  },
  components: {
    'comfirm': comfirm
  },
  created: function() {
    console.log('create');
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
