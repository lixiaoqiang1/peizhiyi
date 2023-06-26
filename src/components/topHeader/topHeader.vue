<!--
 * @Author: your name
 * @Date: 2021-11-08 10:34:53
 * @LastEditTime: 2022-01-10 10:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\topHeader\topHeader.vue
-->
<!-- * @Author: your name
 * @Date: 2021-10-18 09:40:45
 * @LastEditTime: 2021-11-03 11:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\topHeader\topHeader.vue
-->

<template>
 <div>
  <!-- <div class="header" :style="{backgroundImage:'url('+ima+')'}" > -->
  <div class="header">
    <div class="arrow" v-if="show" @click="goBack"></div>
    <div class="title" >{{title}}</div>
    <!-- <div class='right' v-if=" title == '客户管理' " @click='addClient'>拓展客户</div> -->
  </div>
  <div class="fixed"></div>   
 
 </div>
</template>

<script >
import topHeader from "@/components/topHeader/topHeader"
export default {
  props: {
    title: {
      type: String,
    },
    ima:{
      type:String,
      default:require('@/assets/images/userdetails.png')
    },
    show:{
      type:Boolean,
      default:true,
    },
    showUp:{
         type:Boolean,
         default:false,
    },
    showUp:{
      type:Boolean,
      default:false
    }
  },
  
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    addClient(){

      this.$emit("addClient")
    }
  },
}

</script>
  
<style lang="scss" scoped>
.header {
  z-index:99999;
  position: fixed;
  height: 88px;
  background: white;
  box-shadow: 0 4px 20px 0px rgba(0,0,0,0.1);
  // border-bottom: 1px #e6e6e6 solid;
  background-repeat:no-repeat;
  background-size:100%,100%;
  top:0;
  width:100%;
  .right{
    position: absolute;
    display: inline-block;
    color:666;
    font-size:32px;
    right:20px;
    top:24px;
    // background: red;
  }
}
 .fixed{
    width:100%;
    height: 88px;
  }
  .arrow{
    width:25px;
    height: 25px;
    border-top:1px solid #666;
    border-left: 1px solid #666;
    position: absolute;
    transform: rotate(-45deg);
    left:32px;
    top:0;
    bottom: 0;
    margin: auto;
  }
  .title{
    color:#666;
    text-align:center;
    line-height: 88px;
    font-size: 36px;
  }
</style>
