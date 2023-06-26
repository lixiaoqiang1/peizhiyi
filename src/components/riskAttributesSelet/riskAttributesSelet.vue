<!--
 * @Author: your name
 * @Date: 2021-11-05 18:05:10
 * @LastEditTime: 2021-12-04 16:46:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\selet\selet.vue
-->
<template>
  <div class="">
    <div class="rist">
      <h4>{{ res.name }}</h4>
      <div class="myRadio">
        <span :class="item.active?'btn':currentId == index?'btn':'' " @click="getRists(res, item, index,$event)" v-for="(item, index) in res.children" :key="index">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    res: {},
  },
  data() {
    return {
      userSeletObject:{},
      interestsArr: [],
      currentId: null,
      showPopup:false,
      value:'',
      customAmount:'',
      modefiyArr:[],
      customerId:"",
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
            this.currentId= null;
            this.customerId = localStorage.getItem("customerId");
      }
  },


  methods: {
    getRists(res, item, index,e) {
      if (res.status==0) { //status=0代表单选
           this.currentId = index;
           let obj = this.$store.state.userSeletObject;
           obj[this.res.name] = item ;
           this.$store.commit("changeuserSeletObject",obj)
      } else {
          item.active=!item.active
         this.modefiyArr=res.children.filter(pro=>pro.active
         );
             let obj = this.$store.state.userSeletObject;
          if(this.modefiyArr.length==0 && (this.res.name in obj)){
           let key = this.res.name;
           delete obj[key];
          }
          if(this.modefiyArr.length>0)
          {
            obj[this.res.name] = this.modefiyArr ;
          }
           
       
          //  let obj = this.$store.state.userSeletObject;
      }

          this.userSeletObject = this.$store.state.userSeletObject

      this.$emit("sendData", this.userSeletObject);
    },
    showup(){
      this.showPopup=true
    }
  },
  ///////////////
};
</script>
<style lang="scss" scoped>
.rist {
  padding: 30px 0 0 0;
  h4 {
    // padding-left:8px;
    line-height: 60px;
    font-size: 36px;
    color: #333333;
    // padding-top: 56px;
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
  }
  .btn {
    background: url("~assets/images/select.png") no-repeat right bottom #f6ead5 !important;background-size: 40px !important;
    color: #ffffff;
  }
}
</style>