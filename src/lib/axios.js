import axios from 'axios'
import qs from 'qs'
import { baseURL } from '@/config'

class HttpRequest {
  // 每个类必须的
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true, // 允许携带cookie
      crossDomain: true,
      timeout: 5000,
      transformRequest: [function (data) {
        // 对data进行任意转换处理
        return qs.stringify(data)
      }]
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局loading
      // Spin.show()
      // console.log(config.data)
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
