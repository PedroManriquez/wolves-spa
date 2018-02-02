<template>
  <el-row type="flex" :gutter="1">
    <el-col :xs="device.xs" :sm="device.sm" :md="device.md" :lg="device.lg">
      <el-card>
        <h3>Breeds</h3>
        <el-table :data="breeds" border>
          <el-table-column prop="id" label="ID" min-width="40" max-width="30">
          </el-table-column>
          <el-table-column prop="name" label="Name" min-width="150">
          </el-table-column>
          <el-table-column label="Action" min-width="80">
            <template slot-scope="scope">
              <el-popover
                v-for="button in getButtonsBreeds(scope.row)" :key="button.name"
                placement="top"
                title="Title"
                width="200"
                v-model="button.visible"
                content="this is content, this is content, this is content">
                <p>Are you sure to delete this?</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="button.visible = false">cancel</el-button>
                  <el-button type="primary" size="mini" @click="button.handler">confirm</el-button>
                </div>
                <el-button size="mini" :type="button.type" slot="reference" @click="button.visible = !button.visible" :icon="button.icon"></el-button>
              </el-popover>
              <!-- <el-button v-popover:popover5 v-for="button in getButtonsBreeds(scope.row)" size="small" :key="button.name" :type="button.type" click="button.handler" plain>
                <i :class="button.icon"></i>
              </el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <br>
      <el-card>
        <h3>Form Add Breed</h3>
        <breed-form></breed-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import Axios from 'axios'
import BreedForm from './Form'

const url = process.env.address.api + 'breeds'

export default {
  components: {
    BreedForm
  },
  data: () => ({
    deleted: false,
    visible2: false,
    breeds: [],
    device: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 22,
        offset: 1
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
  methods: {
    getButtonsBreeds (row) {
      return [{
        name: 'Delete',
        type: 'danger',
        visible: false,
        icon: 'el-icon-delete',
        handler: _ => {
          this.visible = !this.visible
          // this.$router.push({name: 'Ver Vehículo', params: {id: row.id}})
          Axios.delete(url + '/' + row.id)
            .then(data => {
              console.log(data)
            }, err => {
              console.log(err)
            })
            .catch(e => {
              console.log(e)
            })
        }
      }]
    }
  },
  created () {
    let vm = this
    Axios.get(url).then(res => {
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
