<!--
 * @Author: your name
 * @Date: 2021-10-19 09:37:24
 * @LastEditTime: 2021-12-08 08:58:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\theRiskAttributes\riskAttributes.vue
-->
<template>
 <div class="risk">
      <span>{{title1}}</span>
      <div>
        <span>{{title2}}</span>
        <span>{{title3}}</span>
        <span>{{title4}}</span>
        <span>{{title5}}</span>
        <span>{{title6}}</span>
      </div>
    </div>
</template>
 
<script >
   export default {
       props:["title1","title2","title3","title4","title5","title6",]
   }
</script>

<style lang="scss" scoped>
      .risk{
     padding: 20px 0px 0px 0px;
     div{
       display: flex;
       flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        
       span{
         background-color: #e6e6e6e6;
         width: 150px;
         border-radius: 50px;
         text-align: center;
         line-height: 50px;
        margin-top: 15px;
       }
     }
   }
</style>