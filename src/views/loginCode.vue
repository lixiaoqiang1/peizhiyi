<template>
  <div>main</div>
</template>

<script>
// import NavBar from './NavBar'
import { getWxOpenidAndToken, getWxUserMessage } from '@/api/wx'

export default {
  name: 'News',
  // components: {
  //   NavBar
  // },
  data() {
    return {
      appid: 'wxcb5fe630d0443d15', // 申请的appid
      secret: 'c372e282add539a85418725bb7edb3c0', // 申请的asecret
      code: ''
    }
  },
  created() {
    console.log('非静默授权，第一次有弹框1')
    this.getCode()
  },
  methods: {
    getCode() {
      // 非静默授权，第一次有弹框阿
      console.log('非静默授权，第一次有弹框2')
      this.code = ''
      var local = window.location.href // 获取页面url
      this.code = this.getUrlCode().code // 截取code
      console.log('this.code ', this.code)
      if (this.code == null || this.code === '' || this.code === undefined) {
        // 如果没有code，则去请求
        const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
          this.appid
        }&redirect_uri=${encodeURIComponent(
          local
        )}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
        console.log('url=>:', url)
        window.location.href = url
      } else {
        console.log(this.appid, this.secret, this.code)
        getWxOpenidAndToken(this.appid, this.secret, this.code).then(function(res) {
          console.log('getWxOpenidAndToken=>:', res)
          if (res.access_token !== undefined) {
            getWxUserMessage(res.access_token, res.openid).then(function(resdata) {
              console.log('getWxUserMessage=>:', resdata)
            })
          }
        })
      }
    },
    getUrlCode() {
      // 截取url中的code方法
      var url = location.search
      console.log('url', url)
      this.winUrl = url
      var theRequest = {}
      if (url.indexOf('?') !== -1) {
        var str = url.substr(1)
        var strs = str.split('&')
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
        }
      }
      return theRequest
    }
  }
}
</script>

<style scoped></style>
