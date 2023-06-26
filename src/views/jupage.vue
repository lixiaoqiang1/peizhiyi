<template>
  <div>
    <wx-open-launch-weapp id="launch-btn" username="gh_xxxxxxxx" path="pages/home/index?user=123&action=abc">
      <script type="text/wxtag-template">
        <button >打开小程序</button>
      </script>
    </wx-open-launch-weapp>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ceshi3: ''
    }
  },
  mounted(){
    this.urlpage()
  },
  methods: {
    urlpage(){
      wx.config({
                    //debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
                    appId: 'wx6111bb17571e7e92', // 必填，公众号的唯一标识
                    timestamp: 0123456, // 必填，生成签名的时间戳
                    nonceStr: 'nonceStr', // 必填，填任意非空字符串即可
                    signature: 'signature', // 必填，填任意非空字符串即可
                    jsApiList: ['showOptionMenu', 'chooseImage', 'previewImage'], // 必填，随意一个接口即可   
                    openTagList: ['wx-open-launch-weapp'], // 填入打开小程序的开放标签名  
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
