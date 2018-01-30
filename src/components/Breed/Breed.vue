<template>
  <el-row type="flex" :gutter="1">
    <el-col :xs="device.xs" :sm="device.sm" :md="device.md" :lg="device.lg">
      <el-tabs type="border-card">
        <el-tab-pane label="Breeds">
          <h3>Breeds</h3>
          <el-table :data="breeds" border>
            <el-table-column prop="id" label="ID" min-width="40" max-width="30">
            </el-table-column>
            <el-table-column prop="name" label="Name" min-width="150">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="Add">
          <h3>Form Add Breed</h3>
          <breed-form :breedService="breedsService"></breed-form>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
import Service from '@/service'
import BreedForm from './Form'
export default {
  components: {
    BreedForm
  },
  data: () => ({
    breedsService: new Service('breeds'),
    breeds: [],
    device: {
      xs: {
        span: 22,
        offset: 1
      },
      sm: {
        span: 20,
        offset: 2
      },
      md: {
        span: 16,
        offset: 4
      },
      lg: {
        span: 12,
        offset: 6
      }
    }
  }),
  created () {
    let vm = this
    vm.breedsService.query().then(res => {
      vm.breeds = res.data
    }, err => {
      if (err) {
        vm.message.error(err)
      }
    }).catch(err => {
      if (err) {
        vm.message.error(err)
      }
    })
  }
}
</script>
<style>
</style>
