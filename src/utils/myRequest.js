/*
 * @Author: your name
 * @Date: 2021-11-26 20:13:07
 * @LastEditTime: 2022-01-11 14:09:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\utils\myRequest.js
 */
import axios from 'axios'
import { Toast } from 'mint-ui'
// import { ValidateUserByIdentity } from '@/network'
// import { AESEncrypt, AESDecrypt } from '@/utils/encrypt.js'
// import service from './request';

export function request(config, isShare = false) {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  })
  // 请求拦截
  instance.interceptors.request.use(
    config => {
      console.log(config)
      // if (isShare) {
      //   const shareToken = localStorage.getItem('shareToken')
      //   config.headers['Authorization'] = 'Bearer ' + shareToken
      // } else {
      //   config.headers['Authorization'] = 'Bearer ' + aixosIntoken
      // }
      // if (config.method == 'post') {
      //   const encryptResult = AESEncrypt(JSON.stringify(config.data))
      //   config.data =
      //           {
      //             data: encryptResult
      //           }
      // }
      // 请求成功时候的拦截
      return config
    },
    err => {
      // 请求失败时的拦截
      // console.log(err)
    }
  )
  // 响应拦截
  instance.interceptors.response.use(
    res => {
      console.log(res)
      // if (res.data) {
      //   res.data = JSON.parse(AESDecrypt(res.data))
      // }
      return res.data
    },
    err => {
      Toast({
        message: err,
        position: 'bottom',
        type: 'error',
        duration: 5 * 1000
      })
    }
  )
  // 发送网络请求
  return instance(config)
}
