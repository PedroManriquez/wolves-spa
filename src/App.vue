<template>
  <div id="app">
    <div class="logo">
      <img src="/static/wolf.png">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 2em;
}
.logo {
  text-align: center;
  margin-bottom: 0.8em;
}
.logo img {
  width: 15em;
}
</style>
