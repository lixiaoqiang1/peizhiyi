<template>
  <div class="maindetail">
       <template v-for="(item,index) in cardConfigs">
           <div :key="item.id">
                <div class="title">{{item.title}}</div>
                <div class="content">
                    <div class="gray">{{cardConfigs[index].type}}</div>
                    <div class="golden">{{cardConfigs[index].amount}}</div>
                    <div class="golden">{{cardConfigs[index].percentage}}</div>
                </div>
                <div class="spliter" v-if="index<cardConfigs.length-1"></div>
            </div>
      </template> 
     
  </div>
</template>

<script>
export default {
    name:'infoList',
    props:{
        cardConfigs:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.maindetail{
    margin-bottom: 1px;
    width: 100%;
}
.title{
    text-indent: initial;line-height: 60px;
    // margin-left: 10px;
    // margin-top: 10px;
}
.content{
    display:flex;
    justify-content:space-between;
    margin: 10px 0;
    text-indent: initial;
}
.spliter{
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-top: 10px;
}
.gray{
    color:#666;
}
.golden{
    color:#A17243;
}
</style>