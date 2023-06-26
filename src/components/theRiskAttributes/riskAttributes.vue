<!--
 * @Author: your name
 * @Date: 2021-10-19 09:37:24
 * @LastEditTime: 2021-10-19 14:44:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\theRiskAttributes\riskAttributes.vue
-->
<template>
 <div class="risk">
      <span>{{title}}</span>
      <div>
        <slot></slot>
      </div>
    </div>
</template>
 
<script >
   export default {
       props:["title",]
   }
</script>

<style lang="scss" scoped>
      .risk{
     padding: 20px 0px 10px 0px;
     border-bottom: 1px solid #666666;
     div{
       display: flex;
       flex-wrap: wrap;
        align-content: flex-start;
        margin-top: 15px;
       span{
         background-color: #e6e6e6e6;
         width: 150px;
         border-radius: 50px;
         text-align: center;
         line-height: 50px;
         margin:0  23px 15px 0;
       }
     }
   }
</style>