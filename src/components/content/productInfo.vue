<template>
  <div>
      <div class="card">
        <!-- isChecked -->
        <!-- <input class="checkbox" type="checkbox" :checked="isCheckedInner" @change="checkedChange"/> -->
        <van-checkbox class="ischeckbox" v-model="isCheckedInner" checked-color="#A17243" @change="checkedChange">
            <!-- <div @change="checkedChange" id="checkedDiv"></div> -->
            <!-- <input type="checkbox" :checked="info.isChecked" @change="checkedChange"/> -->
            <div class="card-info">
                <div class="title">
                    <span>
                        <img v-if="isSpecial === 'Y'" class="isSign" src="~assets/images/pentagram@3x.png">
                        {{title}}
                    </span>
                    <!-- <div class="sellStatus" :style="'background-image:url('+preSellUrl+')'"></div> -->
                    <!-- <span style="display:inline-block; width:20px"></span> -->
                    <div class="earning-type-div">
                        <span class="earning-type" v-if="earningType">{{earningType}}</span>
                    </div>
                </div>
                <div class="percentage">{{percentage}}</div>
                <div class="middle-description-text">
                    <div class="left">业绩比较基准</div>
                    <div class="right">期限{{deadLine}} | {{minAmount}}起购</div>
                </div>
                <div v-if="barPercentage">
                    <div class="progress-bar">
                        <van-progress pivot-text="" pivot-color="#A17234" :percentage="barPercentage" color="#A17234"></van-progress>
                    </div>
                    <div class="sell-description">
                        <div class="start-text">起售</div>
                        <div class="end-text" :style="barPercentage<100?{color:'gray'}:{}">截止</div>
                    </div>
                    <div class="sell-date">
                        <div class="start-date" >{{startTime}}</div>
                        <div class="end-date" :style="barPercentage<100?{color:'gray'}:{}">{{endTime}}</div>
                    </div>
                </div>
            </div>
        </van-checkbox>
      </div>
  </div>
</template>

<script>

export default {
    name:'productInfo',
    props:{
        id:{
            type:String,
            required:true,
        },
        typeId:{
            type:Number,
            required:true,
        },
        title:{
            type:String,
            default:''
        },
        percentage:{
            type:String,
            default:''
        },
        deadLine:{
            type:String,
            default:''
        },
        minAmount:{
            type:String,
            default:''
        },
        earningType:{
            type:String,
            default:''
        },
        startTime:{
            type:String,
            default:''
        },
        endTime:{
            type:String,
            default:''
        },
        status:{
            type:String,
            default:''
        },
        isChecked:{
            type:Boolean,
            default:false
        },
        isSpecial:{
            type:String,
            default:''
        }
    },
    data()
    {
        return {
            isCheckedInner:this.isChecked,
            preSellUrl:require("assets/images/sell1.png")
        }
    },
    computed:{
        barPercentage(){
            let totalDays= this.dayjs(this.endTime).diff(this.dayjs(this.startTime),'days')
            let passDays= this.dayjs(new Date()).diff(this.dayjs(this.startTime),'days')

            let percentage=Math.round(passDays/totalDays*100);
            if(percentage>100)
            {
                percentage=100
            }
            else if(percentage<0)
            {
                percentage=0
            }
            return percentage
        }
    },
    methods:{
        checkedChange(event){
            // this.isCheckedInner=event.target.checked
            this.isCheckedInner=event
            this.$emit('checkedChange',this.id,this.isCheckedInner)
        },
    },
    mounted(){
        this.$bus.$on("checkAll",(checkedTypeId)=>
        {
            if(this.typeId==checkedTypeId)
            {
                this.isCheckedInner=true
            }
        })
        this.$bus.$on("uncheckAll",(checkedTypeId)=>{
            if(this.typeId==checkedTypeId){
                 this.isCheckedInner=false
            }
        })
        this.$bus.$on("uncheckAll2",(checkedTypeId)=>{
            if(this.id==checkedTypeId){
                this.isCheckedInner=false
            }
        })
        // if(this.status=='在售')
        // {
        //     this.preSellUrl=require("assets/images/sell1.png")
        // }
        // else if(this.status=='售罄')
        // {
        //     this.preSellUrl=require("assets/images/sell2.png")
        // }
        // else if(this.status=='预售')
        // {
        //     this.preSellUrl=require("assets/images/sell3.png")
        // }
    },
}
</script>

<style lang="less" scoped>
@textColor:#A17234;//2EB1B6
@bgColor: #FDF9F5;//#F0F9FA;
.card{
    margin: 32px;
    padding:32px;
    background-image: linear-gradient(180deg,#FFFFFF 5%,#FCF5EF 100%);
    box-shadow: 0px 12px 24px -18px rgba(5,12,47,0.35);
    border-radius: 20px;
    position: relative;
    border:1px #f7f7f7 solid;
    .ischeckbox{
        width: 100%;display: inline-block;
    }
    /deep/.van-checkbox__icon{
        position: absolute;left: 20px;top: 0;bottom: 0;margin: auto;
    }
    /deep/.van-checkbox__label{
        width: 100%;display: inline-block;margin: 0;
    }
    .checkbox{
        position: absolute;
        left:32px;
        top:38px;
        width:25px;
        height: 25px;
    }
    .card-info{
        margin-left: 35px;
        .title{
            line-height: 40px;
            font-size:28px;
            color:#333;
            position: relative;
            .isSign{
                width: 26px;height: 26px;position: absolute;left: -35px;top: 2px;
            }
            .sellStatus{
                width:83px;
                height:83px;
                position: absolute;
                right:0;
                top:0;
            }
        }
        .earning-type-div{
            margin-top: 10px;
            .earning-type{
                font-size: 22px;
                padding:3px 6px;
                background:#fff;
                border:1px solid #A17243;
                border-radius:4px;
                color:#A17243
            }
        }
       
        .percentage{
            margin-top: 32px;
            color:@textColor;
            font-weight: normal;
            font-size: 36px;
        }
        .middle-description-text{
            margin-top: 10px;
            font-size: 24px;
            color: #7E7E7E;
            font-weight:smaller;;
            .left{
                display:inline-block;
            }
            .right{
                float:right;
                display:inline-block;
            }
        }
        .earning-type{
            margin-top: 20px;
        }
        .progress-bar{
            position: relative;
            margin-top: 30px;
            width:93%;
            margin-left: 20px;
        }
        .progress-bar::before{
            content:"";
            display: inline-block;
            width:12px;
            height: 12px;
            border-radius: 50%;
            border: 4px solid @textColor;
            position: absolute;
            left:-20px;
            top:-10px
        }
        .progress-bar::after{
            content:"";
            display: inline-block;
            width:12px;
            height: 12px;
            border-radius: 50%;
            border: 4px solid @textColor;
            position: absolute;
            left:100%;
            top:-10px
        }
        .sell-description{
            margin-top: 15px;
            color:@textColor;
            font-size: 20px;
            display:flex;
            justify-content: space-between;
        }
        .sell-date{
            color:@textColor;
            margin-top:10px;
            font-size: 20px;
            display:flex;
            justify-content: space-between;
        }
    }
}

// #checkedDiv{
//     width: 33px;
//     height: 27.5px;
//     background-color: red;
// }

</style>