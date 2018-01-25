<template>
  <section>
    <el-row :gutter="0">
      <el-col :xs="12" :sm="12" :md="12" :lg="12">
        <h3>Breed</h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12">
        <el-button round plain icon="el-icon-plus"></el-button>
      </el-col>
    </el-row>
    <el-table :data="breeds" border style="width: 50%; margin: 0px 25%;">
      <el-table-column prop="id" label="ID" min-width="150">
      </el-table-column>
      <el-table-column prop="name" label="Name" min-width="150">
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
  import Service from '@/service'
  export default {
    data: () => ({
      breedsService: new Service('breeds'),
      breeds: []
    }),
    created () {
      let vm = this
      vm.breedsService.query().then(res => {
        vm.breeds = res.data
      }, err => {
        console.log(err)
      })
    }
  }
</script>
<style>
</style>
