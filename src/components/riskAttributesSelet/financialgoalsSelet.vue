<!--
 * @Author: your name
 * @Date: 2021-11-24 10:02:58
 * @LastEditTime: 2021-12-08 11:32:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\riskAttributesSelet\financialgoalsSelet.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-11-05 18:05:10
 * @LastEditTime: 2021-11-24 09:45:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\selet\selet.vue
-->
<style lang="scss" scoped>
.rist {
  h4 {
    padding-left:8px;
    font-size: 36px;
    color: #333333;
    padding-top: 56px;
    font-weight:600;
  }
  //
  .myRadio {
    padding-top:28px;
    &::after {
      //设置伪元素辅助flex布局
      content: "";
      width: 210px;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 24px;
    span {
      background-color: #f5f5f5;
      color: #333333;
      font-size: 30px;
      width: 210px;
      border-radius: 8px;
      line-height: 72px;
      height: 72px;
      margin-top: 20px;
      text-align: center;
    }
    input{
      margin-top: 30px ;
    }
  }
  .btn {
    background: url("~assets/images/select.png") no-repeat right bottom #f6ead5 !important;background-size: 40px !important;
    color: #ffffff;
  }
}
// .boten{
//     width: 500px;
//     height: 400px;
//     border-radius: 8px;
//     background-color: #ffffff;
//     margin: auto;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     position: absolute;
//     overflow: hidden;
//     .sure{
//         background-color: pink;
//         width: 100px;
//         line-height: 40px;
//         border-radius: 40px;
//         text-align: center;
//         margin: auto;
//     }
//     input{
//         background-color: pink;
//         height: 50px;
//         width: 75%;
//         margin-top: 150px;
//         border-radius: 50px;
//         margin-bottom: 20px;
//         text-indent: 20px;
//         margin-left: 30px;
//     }
// }
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 80%;
  height: 340px;
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
}
.block h4{
  text-align: center;line-height: 40px;font-size: 32px;
}
.block-item{
  width: 100%;margin: 20px 0;
}
.input-cont{
  position: relative;
}
.label{
  line-height: 70px;font-size: 30px;
}
.custom{
  width: 100%;border: 1px #ddd solid;border-radius: 8px;line-height: 70px;text-indent: 30px;font-size: 30px;
}
.block-item .wan{
  position: absolute;right: 0;top: 0;line-height: 70px;width: 120px;text-align: center;font-size: 30px;
}
.btn-group{
  text-align: right;margin-top: 50px;
}
.btn-group button{
  padding: 32px 40px;border-radius: 8px;font-size: 30px;line-height: inherit;
}
.btn-group .sure1{
  color: #333;background: #fff;border-color: #ccc;margin-right: 10px;
}
</style>
<template>
  <div>
    <div class="rist">
      <h4>{{ res.name }}</h4>
      <div class="myRadio">
        <span :class="item.active?'btn':currentId == index?'btn':'' " @click="getRists(res, item, index,$event)" v-for="(item, index) in res.children" :key="index">{{ item.name }}</span>
      </div>
    </div>
    <!-- <van-overlay :show="showUp" > 
        <div class="boten">
              <input class="custom" maxlength="6"  type="tel" placeholder="请输入自定义金额" oninput="value=value.replace(/[^\d]/g,'')" v-model="customAmount" /> (万元)
              <van-button class="sure" color="#C9AC80" block  @click="sure" :disabled="this.customAmount.length==0">确定</van-button>
         </div>
    </van-overlay> -->
    <!-- 自定义弹框 -->
    <van-overlay :show="showUp">
      <div class="wrapper">
        <div class="block">
          <h4>自定义金额</h4>
          <div class="block-item">
            <label class="label">金额：</label>
            <div class="input-cont">
              <input class="custom" maxlength="6"  type="tel" placeholder="请输入自定义金额" oninput="value=value.replace(/[^\d]/g,'')" v-model="customAmount" />
              <span class="wan">万元</span>
            </div>
          </div>
          <div class="block-item btn-group">
            <!-- <van-button class="sure1" @click="oncloce">取消</van-button> -->
            <van-button class="sure" color="#C9AC80"  @click="sure" :disabled="this.customAmount.length==0">确定</van-button>
          </div>
        </div>
      </div>
    </van-overlay>
      <!-- 自定义弹框end -->
  </div>
</template>

<script >
import {Dialog} from "vant"
export default {
  props: {
    res: {},
  },
  data() {
    return {
      financialObject:{},
      showPopup:false,
      interestsArr: [],
      currentId: null,
      value:'',
      customAmount:'',
      modefiyArr:[],
      showUp:false, //展示弹窗
    };
  },

  methods: {
    getRists(res, item, index,e) {
      // console.log(res, item, index,e)
      if (res.status==0) { //status=0代表单选
         
          this.currentId = index;
          let obj = this.$store.state.financialObject;
           obj[this.res.name] = item ;
          //  cons。l
          this.$store.commit("changefinancialObject",obj);
          // console.log(obj)
              if(res.name=='投资资金' && res.children.length-1 == index ){
                this.showUp=true
          }

      } else {
          item.active=!item.active
         this.modefiyArr=res.children.filter(pro=>pro.active);
        //  console.log(this.modefiyArr)
          let obj = this.$store.state.financialObject;
          
          if(this.modefiyArr.length==0 && (this.res.name in obj)){
           let key = this.res.name;
           delete obj[key];
          }
          if(this.modefiyArr.length>0)
          {
            obj[this.res.name] = this.modefiyArr ;
          }
          // console.log('objobjobj')
          // console.log(obj)
           this.$store.commit("changefinancialObject",obj);
      }
          this.financialObject = this.$store.state.financialObject;
      //向父组件传值
      this.$emit("sendData", this.financialObject);
    },
    sure(){
      if(this.customAmount.split("")[0] == "0"){
        Dialog.alert({
          message:"投资资金需要为大于0的整数"
        })
        return ;
      }
        this.res.children.forEach(item => {
        if(this.res.name=='投资资金' && this.res.children[this.res.children.length-1]){
            this.showUp=false
            let obj = this.$store.state.financialObject;
            obj['投资资金'].name=this.customAmount + "万"
            obj['投资资金'].num=this.customAmount 
            this.res.children[this.res.children.length-1].name=this.customAmount + "万" 
            this.$store.commit("changefinancialObject",obj);
        }
    });
    //  this.res.children = [...this.res.children]
    //  console.log("-------------------------------");
    //  console.log(JSON.stringify(this.res.children))
    //   this.showUp=false
    },
    oncloce(){
      this.customAmount = ''
      this.showUp = false
    }
  },
  
};
</script>
