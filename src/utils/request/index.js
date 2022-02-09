import axios from 'axios'
import { baseUrl } from './baseURL'
const _authorization = {}
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? baseUrl.dev : baseUrl.online,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    ..._authorization,
  },
})

// 接口出错时是否提示文案
let isNotAlert = false

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 获取配置的参数，接口出错时是否提示文案
    isNotAlert = config.notAlert || false

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 当接口出错时文案提示
    if (response.data.status === 'error' && !isNotAlert) {

    }
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default service
