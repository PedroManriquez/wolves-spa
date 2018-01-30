import axios from 'axios'

class Service {
  constructor (name) {
    this.resource = axios.create({
      baseURL: process.env.address.api + name
    })
    this.resource.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
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
}

export default Service
