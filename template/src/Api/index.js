import instance from '../utils/axios'

const testApi = function (params) {
  return instance.post('/', {
    test: params
  })
}
export {
  testApi
}
