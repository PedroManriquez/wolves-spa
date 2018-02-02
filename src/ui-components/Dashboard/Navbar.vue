<template>
  <el-menu
    mode="horizontal"
    background-color="#006767"
    text-color="#fff"
    active-text-color="#a7a7a7">
    <el-menu-item index="1" @click="toggleSideNav">
      <i class="el-icon-menu"></i>
    </el-menu-item>
    <div>
      <h3 class="title">Wolves App</h3>
    </div>
  </el-menu>
</template>
<script>
export default {
  methods: {
    toggleSideNav () {
      this.$emit('toggleSideNav')
    }
  }
}
</script>
<style scoped>
  .el-menu {
    width: 100%;
  }
</style>
