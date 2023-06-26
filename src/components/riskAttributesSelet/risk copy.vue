<!--
 * @Author: your name
 * @Date: 2021-11-05 18:05:10
 * @LastEditTime: 2021-12-03 17:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\selet\selet.vue
-->
<template>
  <div class="">
    <div class="rist">
      <div class="myRadio">
        <span :class="currentId == index?'btn':'' " @click="getRists(res, item, index,$event)" v-for="(item, index) in res.children" :key="index">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    res: {},
    isrist:{
        type:Number,
        default:''
    }
  },
  data() {
    return {
      userSeletObject: {},
      interestsArr: [],
      currentId: null,
      showPopup:false,
      value:'',
      customAmount:'',
      customerId:"",
      ristnumber:""
    };
  },
  activated(){
        if(this.customerId == localStorage.getItem("customerId"))
        {
            // console.log("不刷新")
            return;
        }
        else
        {
            // console.log("刷新")
            this.currentId=null;
            this.customerId = localStorage.getItem("customerId")
        }

  },
  mounted(){
    
    this.customerId = localStorage.getItem("customerId")
    this.$bus.$on('cancelTypeSelect',()=>{
      this.currentId=null
    })
    this.ristnumber = this.$store.state.user.ristnumber
  },
  methods: {
    getRists(res, item, index,e) {
      // console.log('-----------------')
      // console.log(res, item, index,e)
      
      // console.log(this.ristnumber)
      // console.log(this.isrist)

      if (res.status==0) {
        this.userSeletObject['item']=item
        this.currentId = index;
      } else {
        let itemIndex = this.interestsArr.indexOf(item.name);
  
        if (itemIndex > -1) {
          //判断是否已经存在
          e.target.className=''
          this.interestsArr.splice(itemIndex, 1); //存在，点击第二次取消选中
        } else {
           e.target.className='btn'
          this.interestsArr.push(item.name); //否则就添加到数组中
        }
        //
        this.userSeletObject[res.pid] = this.interestsArr;
      }
      //向父组件传值
      this.$emit("sendData", this.userSeletObject);
    },
    // showup(){
    //   this.showPopup=true
    // }
  },
};
</script>
<style lang="scss" scoped>
.rist {
  h4 {
    font-size: 36px;
    color: #333333;
  }
  //
  .myRadio {
    padding: 10px 0;
    // &::after {
    //   content: "";
    //   width: 180px;
    // }
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    flex-direction: row;
    justify-content: space-between;
    span {
      // background-color: #f5f5f5;
      border:1px #eee solid;
      color: #666;
      font-size: 28px;
      width: 140px;
      border-radius: 24px;
      line-height: 48px;
      height: 48px;
      text-align: center;
    }
    input{
      margin-top: 30px ;
    }
    .btn {
      background-color: #c9ac80;
      // background: url("~assets/images/select.png") no-repeat right bottom #f6ead5 !important;background-size: 40px !important;
      color: #ffffff;
    }
    // .van-tabs__line{
    //   width: 24px;height: 6px !important;
    // }
  }
  
}
</style>