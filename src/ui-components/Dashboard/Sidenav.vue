<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="open"
    background-color="#004c4c"
    text-color="#fff"
    active-text-color="#d78f00">
    <div class="author">
      <div class="photo">
        <img class="author-photo" src="/static/piter.jpg">
      </div>
      <div v-if="!open" class="author-data">
        <span class="dark">Web Design</span><br>
        <span>Pedro Manríquez</span>
      </div>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">Wolves</span>
      </template>
      <el-menu-item-group>
        <template slot="title">Breed Module</template>
        <el-menu-item index="1-1">
          <span slot="title">All Breeds</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <template slot="title">Wolf Module</template>
        <el-menu-item index="1-2">
          <span slot="title">Wolves</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
  .el-menu {
    border-right: 0px
  }
  .brand {
    width: 3em;
    margin: 0em calc(50% - 1.7em);
  }
  .author {
    width: 100%;
    padding: 1.5em 0em;
    display: inline-flex;
  }
  .author-data {
    line-height: 2em;
    width: 60%;
    text-align: center;
    font-size: 0.8em;
    color: #E5E5E5;
  }
  .photo:not(.el-menu--collapse) {
    width: 30%;
    text-align: center;
  }
  .photo {
    padding-left: 0.35em;
  }
  .author-photo {
    width: 3em;
    border: 2px solid rgb(150, 150, 150);
    border-radius: 50%;
  }
  .dark {
    color: #7F7F7F;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
