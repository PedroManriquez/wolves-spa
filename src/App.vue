<template>
  <el-container>
    <side-nav :open="open"></side-nav>
    <el-container style="height: calc(100vh)">
      <el-header style="padding: 0px;">
        <nav-bar v-on:toggleSideNav="toggleNav"></nav-bar>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <main-footer></main-footer>
    </el-container>
  </el-container>
</template>
<script>

import NavBar from '@/ui-components/Dashboard/Navbar'
import SideNav from '@/ui-components/Dashboard/Sidenav'
import MainFooter from '@/ui-components/Dashboard/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    SideNav,
    MainFooter
  },
  data: () => ({
    open: false
  }),
  methods: {
    toggleNav () {
      this.open = !this.open
    }
  }
}
</script>
<style>
  body {
    margin: 0px;
    background: rgb(238, 238, 238);
  }
  .title {
    color: #CECECE;
    padding-left: 4.5em;
  }
</style>
