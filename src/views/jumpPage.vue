<template>
  <div>
    <wx-open-launch-weapp id="launch-btn" :username="username" path="pages/home/index?user=123&action=abc">
      <script type="text/wxtag-template">
        <button>打开小程序</button>
      </script>
    </wx-open-launch-weapp>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data() {
    return {
      username: 'gh_12346' // 要跳转的公众号的
    }
  },
  created() {
    this.urlpage()
  },
  methods: {
    urlpage() {
      const timestamp = Date.parse(new Date()) / 1000
      const NonceStr = Math.random().toString(36).slice(-6)
      const Url = window.location.href.split('#')[0]
      const jsapi_ticket = 'sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VMP37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg'
      const json =
      'jsapi_ticket=' + jsapi_ticket +
      '&noncestr' + NonceStr +
      '&timestamp' + timestamp +
      '&url' + Url
      const signature = CryptoJS.SHA1(json).toString()
      console.log(Url)
      console.log(signature)
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
        appId: 'wxcb5fe630d0443d15', // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: 'nonceStr', // 必填，填任意非空字符串即可
        signature: signature, // 必填，填任意非空字符串即可
        jsApiList: ['showOptionMenu', 'chooseImage', 'previewImage'], // 必填，随意一个接口即可
        openTagList: ['wx-open-launch-weapp'] // 填入打开小程序的开放标签名
      })
      wx.ready(function() {
        console.log('成功')
      })
      wx.error(function(res) {
        console.log('失败=>:', res)
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >
.input-group{
  input{
    border:1px #ddd solid;line-height: 80px;margin: 5px 0;
  }
}
</style>
