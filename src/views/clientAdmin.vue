<template>
  <div class="body">
    <div class="header" :style="{backgroundImage:'url('+require('@/assets/images/detail_bj.png')+')'}"  :show="false" :showUp="true" @addClient='addClient' >
        <div class="title">客户管理</div>
        <div class='right' @click='addClient'>拓展客户</div>
    </div>
   <!-- <top-header class="top_header" title="客户管理" :show="false" :showUp="true" @addClient='addClient'/> -->
    <van-tabs v-model="activeName" class="van-tabs" title-active-color="#A17243">
       <van-tab name="adminUser">
    <div slot="title" class="title" >
      <template v-if="activeName=='adminUser'">
            <img class="nav-icon" src="~/assets/images/icon_title1.png"/>
      </template>
      <template v-else>
            <img class="nav-icon" src="~/assets/images/icon_title01.png"/>
      </template><span>管户客户</span>
    </div> 
  <div >
          </div>
          <div>
              <van-search v-model="value" :placeholder="searchText" background="#f8f8f8" shape="round" @search="handleSearchClientAdmin" class="search"></van-search>
              <div class="infos">
                <div class='fa'>
                  <template v-for="item in userInfoList">
                    <info-card :key="item.userNo" :userInfo="item"></info-card>
                  </template>
                  <template v-if="userInfoList.length==0">
                        <div class="default">
                          <div class="img"><img src="~/assets/images/default@2x.png"></div>
                          <span>暂无数据</span>
                        </div>
                  </template>
                </div>
                  
              </div>
          </div>
        </van-tab>
        <van-tab name="assistUser">
           <div slot="title"  class="title" style="font-size:.32rem">
                <template v-if="activeName=='assistUser'">
                  <img src="~/assets/images/icon_title2.png"/>
                </template>
                <template v-else>
                  <img src="~/assets/images/icon_title02.png"/>
                </template><span>协管客户</span></div>
           <div >
              <van-search v-model="value" :placeholder="searchText" background="#f8f8f8" shape="round" @search="handleSearchAssistUser" class="search"></van-search>
          </div>
           <div class="infos">
             <div class='fa'>
              <template v-for="item in assistantUserInfoList">
                <info-card :key="item.userNo" :userInfo="item"></info-card>
              </template>
              <template v-if="assistantUserInfoList.length==0">
                    <div class="default">
                            <div class="img"><img src="~/assets/images/default@2x.png"></div>
                            <span>暂无数据</span>
                          </div>
              </template>
             </div>

            </div>
        </van-tab>
     </van-tabs>
     <div class="fillDiv"></div>
  </div>
</template>

<script>
import InfoCard from "components/content/InfoCard";
import TopHeader from "@/components/topHeader/topHeader"
import { getPaggingClientAdmin,getPaggingAssistantUser,searchClientAdmin,searchgAssistantUser } from '@/network'
import { formatName } from 'utils'
import { Dialog,Toast } from "vant"
import { Constant } from 'utils/const'
export default {
  name:'clientAdmin',
  components:{
    InfoCard,
    TopHeader
  },
  data(){
    return {
      activeName:'adminUser',
      value:'',
      searchText:'请输入姓名/客户编号',
      userInfoList:[],
      assistantUserInfoList:[],
      clientId:1234567891234567
    }
  },
  beforeCreate(){
    if(this.$route.query.customerId){
      this.$router.push('/messageValidate')
    }
  },
  mounted(){
    // this.getAllData();
  },
  activated(){
    this.userInfoList=[]
    this.getAllData();
    this.$bus.$emit("backToClientAdmin")
  },
  methods:{
    addClient(){
      this.$router.push({'path':"/clientAdminAdd"})
    },
    getAllData(){
      this.userInfoList=[]
      this.assistantUserInfoList=[]
      const json = {
          current: 1,
          size: 200,
          count: global.loginAccount
      }
      Toast.loading({ message: '加载中...', duration: 0, forbidClick: false })
      getPaggingClientAdmin(json).then(res=>{
          res.data.records.forEach(item=>{
            this.userInfoList.push({
              userName:formatName(item.name,item.sex),
              userNo:item.clientId,
              isImportant: item.clientLevel>0,
              riskAttribute:item.risk?item.risk:"-",
              clientLevel:item.clientLevel>0?'重点客户':'普通客户',
              assetLevel:item.investment,
            })
          })
          Toast.clear()
      }).catch((err)=>{
        Toast.clear()
      })
      getPaggingAssistantUser(json).then(res=> {
        res.data.records.forEach(item=> {
            this.assistantUserInfoList.push({
              userName:formatName(item.name,item.sex),
              userNo:item.clientId,
              isImportant: item.clientLevel>0,
              riskAttribute:item.risk?item.risk:"-",
              clientLevel:item.clientLevel>0?'重点客户':'普通客户',
              assetLevel:item.investment
            })
        })
      })
    },
    handleSearchClientAdmin(val){
      this.userInfoList=[]
      const json = {
        str:this.value,
        userCount:global.loginAccount
      }
      searchClientAdmin(json).then(res=>{
        if(res.code == 200){
          res.data.forEach(item=>
          {
            this.userInfoList.push(
            {
              userName:formatName(item.name,item.sex),
              userNo:item.clientId,
              isImportant: item.clientLevel>0,
              riskAttribute:item.risk?item.risk:"-",
              clientLevel:item.clientLevel>0?'重点客户':'普通客户',
              assetLevel:item.investment
            })
          })
        }
        else
        {
          Dialog.alert({
            message:res.msg
          })
        }
     })
    },
    handleSearchAssistUser(val){
      this.assistantUserInfoList=[]
      const json = {
        str: this.value,
        userCount: global.loginAccount
      }
      searchgAssistantUser(json).then(res=>{
        if(res.code == 200)
        {

          res.data.forEach(item=>
          {
              this.assistantUserInfoList.push(
              {
                userName:formatName(item.name,item.sex),
                userNo:item.clientId,
                isImportant: item.clientLevel>0,
                riskAttribute:item.risk?item.risk:"-",
                clientLevel:item.clientLevel>0?'重点客户':'普通客户',
                assetLevel:item.investment
              })
          })
        }
        else
        {
          Dialog.alert({ message:res.msg })
        }
    })
    },
  }
  
}
</script>

<style lang="less" scoped>
.header {
  z-index:99999;position: fixed;height: 88px;background-repeat:no-repeat;
    background-size:100%,100%;top:0;width:100%;
  .title{
        color:#fff;text-align:center;font-size: 36px;line-height: 88px;
  }
  .right{
    position: absolute;
    display: inline-block;
    color:#fff;
    line-height: 88px;
    font-size:32px;
    right:32px;
    top:0;
    // background: red;
  }
}
  .default{
     width:700px;
     height:800px;
     text-align:center;
     font-size:64px;
     margin:0 auto;
     top:70px;
     left:0;
     bottom:0;
     right:0;
     position:absolute;
     .img{
       width:100%;
        img{
        width:60%;
      }
     }
     span{
       font-size: 40px;
     }
     
   }

.van-field__control{
  padding: 10px 10px 10px;
}
.van-tabs__content{
  background-color: #fff;
}
.infos{
  padding:20px 32px 0 32px;
  background: #f8f8f8;
  position: absolute;
  top:180px;
  bottom: 144px;
  left:0px;
  right:0;
  overflow: scroll;
  .fa{
    background-image:linear-gradient(180deg,#FFFFFF 5%,#FCF5EF 100%);
    border-radius: 20px;
    margin-bottom: 45px;
    border:1px #eee solid;
  }
}
.nav-icon{
  margin-right: 0.15rem;
}
.fillDiv{
  width: 100%;
  // height: 100px;
}
.title{
  font-size:32px;
  img{
    width:34px;
    height:34px;margin: 2px 5px 0 0;float: left;
  }
}
.search{
  background-color:#ffffff;padding: 0 32px;
}
/deep/ .van-tabs {
    position: absolute;
    top: 88px;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
/deep/.van-search__content{
     height:60px;
     padding-top:12px;
     background:#ffffff;
     border:1px solid #E3CDAF;
}
/deep/.van-field__control{
  font-size:26px;
}
/deep/.van-icon-search::before{
  width:28px;
  height:28px;
}
/deep/input::-webkit-input-placeholder{
  color:#B6834F;
  font-size:26px;
}
 /deep/ .van-icon, .van-icon::before{
  font-size: 35px;  
  color:#B6834F;
  margin-top:3px;
  margin-left:32px;
}
 /deep/.van-search .van-cell{
  padding-top:10px;
}
/deep/.van-tabs__line{
  height:0px;
}
/deep/ .van-tabs__nav{
  background: #775a37;

}
/deep/ .van-tabs__nav > div:first-child{
  border-radius: 30px 0 0 0;
  background:#ddd0c3;
  color:#777
}

/deep/ .van-tabs__nav > div:nth-child(2){
  border-radius: 0 30px 0 0;
    background:#ddd0c3;
    color:#777
  
}
/deep/ .van-tab--active{
  background-image: linear-gradient(0deg,#DDC3A1 0%,#FFF1E1  100%) !important;


}
/deep/ .van-search{
  height: 110px  !important;
  padding-top: 24px;
  padding-bottom: 24px;
}
/deep/ .van-tab__text--ellipsis{
  line-height: 40px;
}

/deep/ .van-icon{
  margin-top: 5px;
  margin-right: 5px;
}
</style>