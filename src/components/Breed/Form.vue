<template>
  <el-form :label-position="'top'" label-width="100px" :model="breed">
    <el-form-item label="Name">
      <el-input v-model="breed.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click.prevent="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import Axios from 'axios'

const url = process.env.address.api + 'breeds'

export default {
  data: () => ({
    breed: {
      name: ''
    }
  }),
  methods: {
    onSubmit () {
      this.$message.info(JSON.stringify(this.breed))
      Axios.post(url, this.breed)
        .then(response => {
          this.$message.info('A new Wolf-Breed Created successfully!')
          console.log(response)
        }, err => {
          this.$message.error(err)
        })
        .catch(err => {
          if (err) {
            console.log(err)
          }
        })
    }
  }
}
</script>
