<!--
 * @Author: your name
 * @Date: 2021-10-21 11:15:29
 * @LastEditTime: 2021-11-02 14:56:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\table\table.vue
-->
 <!-- 
    tableHeader: 表格头部数据， type:[],
    tableContent:表格内容数据   type:[],
    conbinationCase:组合情况数据  type:[],
    //
    tableHeader.productType :产品类型, type:string,
    tableHeader.roductName:  产品名称， type:string,
    tableHeader.configurationAmount:配置金额， type:string,
    tableHeader.configurationAccounted：配置占比  string
    tableHeader.historyAge:历史， type：string
    //
    tableHeader内的数据请按照上面的顺序放置，然后 tableContent内的每一项也与上面的顺序对应放置
   tableContent.productType :表格产品类型展示数据, type:string,
   tableContent.roductName:  产品名称展示数据， type:string,
   tableContent.configurationAmount:配置金额数据， type:number,
   tableContent.configurationAccounted：配置占比展示数据  type：number
   tableContent.historyAge:历史年限展示数据， type：string
   //
   conbinationCase.conbinationcase  :组合情况数据  type：string
   conbinationCase.configurationAccounted: 组合情况配置占比展示数据  type:string  
   conbinationCase.historyAge :组合情况历史年限
  -->
<template>
  <div class="form">
    <table>
      <tr >
        <td v-for="(itemx,id) in  Object.keys(res.tableData.tableHeader[0])" :key="id">{{ res.tableData.tableHeader[0][itemx] }}</td>
      </tr>
      <tr v-for="(item, index) in res.tableData.tableContent" :key="index">
        <td class="mark" v-for="(itemx,index) in  Object.keys(item)" :key="index">{{ res.tableData.tableContent[0][itemx] }}</td>
        <!-- <td>{{ item.productName }}</td>
        <td style="textalign: right">{{ item.configAmount }}</td>
        <td>
          <span v-if="show == '0' ? 1 : 0">37%</span>
          <span style="color: pink" v-if="show == '1' ? 1 : 0">点击购买</span>
        </td>
        <td class="mark">现金类</td>
        <td>天天赢</td>
        <td style="text-align: right">1088.34万</td>
        <td>37%</td> -->
      </tr>
      <!-- 是否显示统计行 -->
      <!-- <tr v-if="showStatistical" style="backgroundcolor: green">
        <td colspan="3">组合情况</td>
        <td>100%</td>
        <td>H</td>
        <td>37%</td>
        <td class="mark">现金类</td>
        <td>37%</td>
      </tr> -->
    </table>
  </div>
</template>

<script >
export default {
  props: ["showStatistical", "show"],
  data() {
     
    return {
      res: {
        code: 200,
        tableData: {
          tableHeader: [
            {
              productType: "产品类型",
              roductName: "产品名称",
              configurationAmount: "配置金额",
              configurationAccounted: "配置占比",
               historyAge: "历史年限",
            },
          ],
          tableContent: [
            {
              productType: "现金类",
              roductName: "天天赢",
              configurationAmount: 88888,
              configurationAccounted: "20%",
              historyAge: "A",  
            },
            {
              productType: "现金类",
              roductName: "天天赢",
              configurationAmount: 88888,
              configurationAccounted: "20%",
              historyAge: "A",  
            },
            {
             productType: "现金类",
              roductName: "天天赢",
              configurationAmount: 88888,
              configurationAccounted: "20%",
              historyAge: "A",  
            },
          ],
          conbinationCase:
            {conbinationcase:'组合情况', configurationAccounted:'100%',historyAge:'H'}
            
        },
        errMsg: "请求出错",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  overflow: scroll;
  table {
    padding: 0 10px;
    tr {
      height: 40px;
      line-height: 60px;
      border-top: 1px solid #666666;
      &:nth-child(1) {
        border: none;
      }
      td {
        min-width: 180px;
      }
      .mark {
        color: aqua;
      }
    }
  }
}
</style>