<!--
 * @Author: your name
 * @Date: 2021-12-03 18:34:14
 * @LastEditTime: 2021-12-04 23:03:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \udesk-mobile-template\src\components\content\reportInfoCard.vue
-->
<template>
  <div class="main" :style="isShare?'width:100%;margin-left:0;':''"> 
      <div class="title">
          <div class="img" :style="{backgroundImage:`url('${imgUrl}')`}"></div>
          <div class="text"><span>{{title}}</span></div>
      </div>
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"reportInfoCard",
    props:{
        imgUrl:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        },
        isShare:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return {
            fullScreenObj:{
                width:'100%',
                marginLeft:0
            }
        }
    },
    mounted(){
    
    }
}
</script>

<style lang="less" scoped>
    .main{
        // width:90%;
        // margin-left: 5%;
        // padding: 0 32px;
        .title{
            display:flex;
            .text{
                display:inline-block;
                font-weight: bold; 
                font-size:32px;
                color:#111111;
                padding:40px 0px 20px;
                margin-left:16px;
            }
        }
    }
    .img{
        width:32px;
        height: 32px;
        display: inline-block;
        margin-top:40px;
        background: no-repeat;
        background-size: cover;
    }
    .content{
        margin-top: 20px;
        padding: 0 20px;
        border-radius:20px;
    }
    
</style>