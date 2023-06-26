<template>
  <div class="info-card" @click="toCustomerDetail(userInfo.userNo)">
      <div class="top">
        
        <div class="user-info">{{userInfo.userName}}
            <span v-if="userInfo.isImportant"><img src="~assets/images/pentagram.svg" class="star" alt=""></span>
            <!-- <span v-if="userInfo.asstatus != 0 ? true : false" class='passOrNot'>审批中</span> -->
            <br/><br/>
            {{userInfo.userNo}}</div>
            <div class="arrow" ></div>
      </div>
     <div class="investment">
            <div class="custommer">
                <span>风险属性</span>
                <span>{{userInfo.riskAttribute}}</span>
            </div>
             <div class="custommer">
                <span>客户等级</span>
                <span>{{userInfo.clientLevel}}</span>
            </div>
             <div class="custommer">
                <span>资产等级</span>
                <span>{{typeof userInfo.assetLevel=="undefined"||userInfo.assetLevel===null?'-':userInfo.assetLevel+'万'}}</span>
            </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"InfoCard",
    props:{
        userInfo:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    methods:{
        toCustomerDetail(customerId){
            localStorage.setItem("customerId",customerId)
            this.$router.push({
                path:`/thecustomerdetails`,
                query:{
                    customerId:customerId
                }
            })
        }
    },
}
</script>

<style scoped lang="scss" scoped>
.info-card{
    padding-left: 32px;
    padding-right: 32px;
}
.info-card:last-child .investment{
    border-bottom: none;
}
.user-info{
    display:inline-block;
    position: relative;
    font-size: 30px;
    .passOrNot{
        position: absolute;
        margin-left: 20px;
        top: -5px;
        color: #999;
        font-size: 24px;
        border: 1px solid #fff;
        width: 112px;
        height:42px;
        text-align: center;
        line-height: 42px;
        display: inline-block;
        border-radius:36px ;
        color:white;
        background:#c9ac80;
       

    }
}
.star{
    margin-left: 15px;
    color:#FFC931;
    width:20px;
    height: 20px;
}
.arrow{
    width:10px;
    height: 10px;
    border-top:2px solid #999;
    border-right:2px solid #999;
    display:inline-block;
    transform: rotate(45deg);
    position: absolute;
    right: 0;
    top:40px
}
.top{
    padding-top: 30px;
    position: relative;
}
.title{
    display:flex;
    font-size: smaller;
    justify-content: space-between;
}
.infos{
    display:flex;
    justify-content: space-between;
    font-size: large;
}
.bottom{
    margin-top: 30px;
}
.investment{ 
            padding:24px 32px ;
            border-bottom: 1px solid #ddd;
            display:flex;
            justify-content:space-between;
            .custommer{
               display:flex;
               flex-direction:column;
               text-align:center;
                   span{
                       &:nth-child(1){
                           font-size:24px;
                           color:#666666;
                           line-height:36px;
                           margin-bottom:10px;
                       }
                       &:nth-child(2){
                           font-size:36px;
                           color:#A17243;
                           
                       }
                   }
           } 
    }
     
</style>