/*
 * @Author: your name
 * @Date: 2021-11-09 10:06:47
 * @LastEditTime: 2021-12-03 09:44:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\utils\request.js
 */
import axios from 'axios'
import { Toast } from 'mint-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  // baseURL:"http://10.12.17.57:10000",
  timeout: 5000, // 请求超时时间
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['X-Token'] = '123456'
    config.headers['Authorization'] = "Bearer " + aixosIntoken;
    return config
  },
  error => {
    // Do something with request error

    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * 根据success判断请求是否出错了
     * response.data得结构为
     * {
     *  "data":{},
     *  "success":true,
     *  "message":"提示信息",
     *  "detail":null
     * }
     */
    const res = response.data
    if (!res.success) {
      Toast({
        message: res.message,
        position: 'bottom',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error('error'))
    } else {
      return response.data
    }
  },
  error => {
    Toast({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
