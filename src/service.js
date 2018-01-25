import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

class Service {
  constructor (name) {
    this.resource = axios.create({
      baseURL: process.env.address.api + name
    })
  }
  query () {
    return this.resource.get()
  }
  getById (id) {
    return this.resource.get({id})
  }
  save (model) {
    return this.resource.post(model)
  }
  destroy (id) {
    return this.resource.delete({id})
  }
  update (id, model) {
    return this.resource.put({id}, model)
  }
  getAddress () {
    return process.env.address
  }
  getResource () {
    return this.resource
  }
  getVueInstance () {
    return Vue
  }
}

export default Service