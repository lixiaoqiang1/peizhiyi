
<style lang="scss" scoped>
.rist {
  padding: 30px 0 0 0;
  h4 {
    // padding-left:8px;
    font-size: 36px;
    color: #333333;
    // padding-top: 56px;
    line-height: 60px;
    font-weight:600;
  }
  //
  .myRadio {
    // padding-top:28px;
    &::after {
      //设置伪元素辅助flex布局
      content: "";
      width: 210px;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // padding-bottom: 24px;
    span {
      background-color: #f5f5f5;
      color: #333333;
      font-size: 28px;
      width: 210px;
      border-radius: 8px;
      line-height: 72px;
      height: 72px;
      margin-top: 20px;
      text-align: center;
    }
  }
  .btn {
    background: url("~assets/images/select.png") no-repeat right bottom #f6ead5 !important;background-size: 40px !important;
    color: #ffffff;
  }
}
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
  width: 100%;margin: 40px 0;
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
         <!-- <van-popup v-model="showPopup" position="bottom" :style="{height:'50%'}" closeable>
           <input type="tel" placeholder="请输入收益金额" oninput="value=value.replace(/[^\d]/g,'')" v-model="customAmount" /> 
            <van-field readonly clickable :value="value" @touchstart.native.stop="show=true" />
            <van-number-keyboard v-model="customAmount" :show="show"  @blur="show=true" theme="custom" :extra-key="['.']" close-button-text="完成" @input="onInput" @delete="onDelete" />
         </van-popup> -->
        <!-- <span  @click="getRists(res)" v-for="(item,index) in res.values" :key="index">{{item.value}}</span> -->
      </div>
    </div>
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
            <!-- <van-button class="sure1"  @click="oncloce">取消</van-button> -->
            <van-button class="sure" color="#C9AC80"  @click="sure" :disabled="this.customAmount.length==0">确定</van-button>
          </div>
        </div>
      </div>
    </van-overlay>
    <!-- 自定义弹框end -->
  </div>
</template>

<script >
export default {
  props: {
    res: {},
    ristobj:{},
  },
  data() {
    return {
      seletObject:{},
      interestsArr: [],
      currentId: 0,
      showPopup:false,
      value:'',
      customAmount:'',
      modefiyArr:[],
      customerId:"",
      showUp:false, //展示弹窗
      
    };
  },
  mounted(){
     this.customerId = localStorage.getItem("customerId");
  },
  activated(){
        //由customerId来判断刷新与否
      if(this.customerId == localStorage.getItem("customerId")){
            return;
          }else{
            this.currentId= 0;
            this.customerId = localStorage.getItem("customerId");
      }
  },
  methods: {
    getRists(res, item, index,e) {
      // console.log(this.currentId)
      // console.log(index)
      if (res.status==0) { //status=0代表单选
           this.currentId = index;
          // let obj = this.$store.state.seletObject;
          //  obj[this.res.name] = item ;
           this.ristobj[this.res.name] = item ;
          //  this.$store.commit("changeseletObject",obj)
          let obj = this.$store.state.financialObject;
           obj[this.res.name] = item ;
          this.$store.commit("changefinancialObject",obj);

          if(res.name=='资产等级' && res.children.length-1 == index ){
            this.showUp=true
          }
      } else {
          item.active=!item.active
         this.modefiyArr=res.children.filter(pro=>pro.active
         );
       
          //   let obj = this.$store.state.seletObject;
          // if(this.modefiyArr.length==0 && (this.res.name in obj)){
          //  let key = this.res.name;
          //  delete obj[key];
          // }
          // if(this.modefiyArr.length>0)
          // {
          //   obj[this.res.name] = this.modefiyArr ;
          // }
           
          //    this.$store.commit("changeseletObject",obj)
      }
        // this.seletObject= this.$store.state.seletObject;
          //  this.$emit("sendData", this.seletObject);
    },
    sure(){
      if(this.customAmount.split("")[0] == "0"){
        Dialog.alert({message:"资产等级需要为大于0的整数"})
        return ;
      }
      this.res.children.forEach(item => {
        if(this.res.name=='资产等级' && this.res.children[this.res.children.length-1]){
          this.showUp=false
          let obj = this.$store.state.financialObject;
          obj['资产等级'].name=this.customAmount + "万"
          obj['资产等级'].num=this.customAmount 
          this.res.children[this.res.children.length-1].name=this.customAmount + "万" 
          this.$store.commit("changefinancialObject",obj);
        }
      });
    },
    oncloce(){
      this.customAmount = ''
      this.showUp = false
    }
    // showup(){
    //   this.showPopup=true
    // }
  },
};
</script>