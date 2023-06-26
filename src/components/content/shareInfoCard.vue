<template>
    <div class="main">
        <div class="title">{{title}}</div>
        <div class="divider" style=" border-bottom: 1px solid #ccc;margin-bottom: 20px;"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"shareInfoCard",
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped lang="less">
    .main{
        margin-top: 30px;
        width:90%;
        margin-left: 5%;
        background-color: #FCF9F3;
        padding-bottom: 30px;
        padding-top: 30px;
    }
    .title{
        font-weight: bold;
        margin-bottom: 30px;
    }
    // .divider{
    //     border-bottom: 1px solid #ccc;
    //     margin-bottom: 30px;
    //     // box-shadow: 0 0 0 1px red;
    // }
     ul{
             line-height: 80px;
             background-color: #ffffff;
             display: flex;
             align-items: center;
             padding: 0px 32px;
            li{
                &:nth-child(1){
                    background-color: #A17243;
                    width: 6px;
                    height: 32px;
                    margin-right:10px ;
                }
                &:nth-child(2){
                    color: #333333;
                    font-weight: 500;
                    font-size: 32px;
                }
            }
        }
    .warmPrompt{
             margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
        }
</style>