<!--
 * @Author: your name
 * @Date: 2021-12-01 09:19:14
 * @LastEditTime: 2021-12-07 17:31:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\components\content\discriptionCard.vue
-->
<template>
    <!-- <div class="main">
        <div class="title" ref="title">{{title}}</div>
        <div class="content">{{content}}</div>
        <div class="down">
            <span class="down-s">当前配比：<a class="txt">{{ now }}%</a></span>
            <span class="down-s">建议调至<a class="txt">{{ tuggest }}%</a></span>
            <van-button v-if="status === 1" class="s-btn" round type="default" size="small" @click="onShuhui">赎回</van-button>
            <van-button v-else-if="status === 0" class="s-btn" round type="default" size="small">加仓</van-button>
        </div>
    </div>  -->
    <div class="main">
        <!-- {{ DataList }} -->
        <div class="title" ref="title">{{DataList.descriptionTitle}}</div>
        <div class="content">{{getText(DataList.descriptionContent)[0]}}</div>
        <div class="content">{{getText(DataList.descriptionContent)[1]}}</div>
        <div class="down">
            <span class="down-s">当前配比：<a class="txt">{{ getFenbi(DataList.now) }}</a></span>
            <span class="down-s down-pic1">建议调至：<a class="txt" :style="Number(DataList.now) > Number(DataList.tuggest)?note1:note2">{{ getFenbi(DataList.tuggest) }}</a></span>
            <!-- <van-button v-if="Number(DataList.now) >= Number(DataList.tuggest)" class="s-btn" round type="default" size="small" @click="onShuhui">赎回</van-button> -->
            <!-- <van-button v-else-if="Number(DataList.now) < Number(DataList.tuggest)" class="s-btn" round type="default" size="small" @click="onShuhui">申购</van-button> -->
        </div>
    </div>   
</template>

<script>
export default {
    // name:'discriptionCard',
    // props:{
    //     title:{
    //         type:String,
    //         required:true,
    //         default:''
    //     },
    //     content:{
    //         type:String,
    //         required:true,
    //         default:''
    //     },
    //     titleBold:{
    //         type:Boolean,
    //         default:true
    //     },
    //     now:{
    //         type:Number,
    //         required:true,
    //         default:''
    //     },
    //     tuggest:{
    //         type:Number,
    //         required:true,
    //         default:''
    //     },
    //     status:{
    //         type:Number,
    //         required:true,
    //         default:''
    //     },
    // },
    
    name:'discriptionCard',
    props:{
        DataList:{
            type: Object,
            required:true,
            default:()=>[]
        },
    },
    data(){
        return {
            note1:{
                backgroundImage:'url('+ require('@/assets/images/icon_jt2.png') +')'
            },
            note2:{
                backgroundImage:'url('+ require('@/assets/images/icon_jt1.png') +')'
            }
        }
    },
    mounted(){
        // this.$refs.title.style.fontWeight=this.DataList.titleBold?'bold':'normal'
    },
    methods:{
        // 文字换行符分割
        getText(row){
            try{
                return row.split("<br/>")
            }catch(err){
                return ''
            }
        },
        // 百分比
        getFenbi(row){
            try{
                return row +'%'
            }catch(err){
                return '--'
            }
        },
        onShuhui(){
            // console.log('赎回---')
        }
    }
}
</script>

<style lang="less" scoped>
@left: left; @s28: 28px;@colory:#d9a95d;
.main{
    padding: 40px 20px 0;
    .title{
        font-size:36px;
        color:#333333;
    }
    .content{
        margin-top: 24px;
        color:#666666;
        font-size:@s28;
        text-align:justify;
        // letter-spacing:2px;
        // text-indent:72px;
        line-height:40px;
    }
    .down{
        height: 62px;margin-top:20px;
        .down-s{
            color: #666666;
            font-size: @s28;
            letter-spacing: 2px;
            line-height: 62px;
            margin-right: 10px;float: @left;
            text-align: right;
        }
        .txt{
            color: @colory;
        }
        .s-btn{
            font-size: @s28;
            padding: 10px 20px;
            line-height: 40px;
            color: @colory;
            border-color:@colory;
            height: auto;float: @left;
            background: none;
            .van-button--default{
                color: #666666;font-size: @s28;
            }
        }
        .down-pic1 a{
            background-repeat: no-repeat;
            background-size: 26px;
            background-position: center right;
            width: 60px;
            display: inline-block;
            padding-right: 22px;
        }
    }
}
</style>