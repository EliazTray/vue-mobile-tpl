import axios from 'axios'
import qs from 'qs'
import { Toast, Indicator } from 'mint-ui'
import base from '../config'

// 设置全局生效的baseURL
axios.defaults.baseURL = base.baseURL

// 创建单例axios
const instance = axios.create({
  // baseURL: baseUrl,
  withCredentials: true,
  transformRequest: [function (data) {
    return qs.stringify(data)
  }]
})

instance.interceptors.request.use(config => {
  Indicator.open()
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(response => {
  Indicator.close()
  // 在我们系统中，设置自定义返回码为2时，走重定向
  if (response.data.errcode === 2 && response.data.data) {
    window.location.href = response.data.data
    return
  }
  // 对于errocode为1时，进行Toast提示，其余的返回码，通过resolve到界面，具象实现
  if (response.data.errcode === 1) {
    Toast(response.data.msg)
  }
  return response
}, error => {
  // Do something with response error
  Indicator.close()
  if (error.response.status === 404) {
    Toast('服务器繁忙,请稍后重试')
  }
  if (error.response.status === 500) {
    Toast('服务器繁忙,请稍后重试')
  }
  // 这里最好resolve掉服务器错误这种情况，省的之后还要catch
  return Promise.resolve(error.response)
})

export default instance
