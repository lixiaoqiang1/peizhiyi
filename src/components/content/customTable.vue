<!--
 * @Author: your name
 * @Date: 2021-12-29 14:29:12
 * @LastEditTime: 2021-12-30 15:58:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\content\customTable.vue
-->
<template>
   <div class="main">
       <table>
           <template>
            <tr v-if="titles.length>0" class="title">
                <td v-for="item in titles" :key="item">{{item}}</td>
            </tr>
           </template>
           <template>
               <tr v-for="(item,key,index) in this.datas" :key="index">
                   <td :class="highLightFields.includes(key)">{{item.productType}}</td>
                   <td>{{item.productName}}</td>
                   <td>{{item.configMoney}}</td>
                   <td>{{item.configPercentage}}</td>
               </tr>
           </template>
       </table>
  </div>
</template>

<script>
export default {
    name:'customTable',
    props:{
        titles:{
            type:Array,
            default(){
                return ['产品类型','产品名称','配置金额','配置比例'];
            }
        },
        highLightFields:{
            type:Array,
            default(){
                return ['productType'];
            }
        },
        datas:{
            type:Array,
            default(){
               return  [
                {id:1,productType:'现金类',productName:'天天盈',configMoney:'1088.34万元',configPercentage:'37%'},
                {id:2,productType:'固收类',productName:'灵动',configMoney:'878.34万元',configPercentage:'27%'},
                {id:3,productType:'权益类',productName:'博盈',configMoney:'678.37万元',configPercentage:'20%'},
                {id:4,productType:'固收类',productName:'稳健',configMoney:'678.37万元',configPercentage:'9%'},
                {id:5,productType:'其他类',productName:'账户金',configMoney:'638.33万元',configPercentage:'7%'},
               ];
            }
        }
    }
}
</script>

<style scoped lang="less">
.main{
    margin-top: 15px;
}
table{
  width:100%;
  height: 100%;
  padding:0 10%;
  tr{
      line-height: 60px;
      border-top: 1px solid #ddd;
      &:nth-child(1){
          border:none;
      }
  }
}
.high-light{
    color: #29B3B7;
}
</style>