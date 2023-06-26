

<template>
 <div class="risk">
      <span>{{title1}}</span>
      <div>
        <span>{{title2}}</span>
        <span>{{title3}}</span>
        <span>{{title4}}</span>
      </div>
    </div>
</template>
 
<script >
   export default {
       props:["title1","title2","title3","title4"]
   }
</script>

<style lang="scss" scoped>
      .risk{
     padding: 20px 0px 10px 0px;
     border-bottom: 1px solid #666666;
     div{
       display: flex;
        margin-top: 15px;
       span{
         background-color: #e6e6e6e6;
         width: 150px;
         border-radius: 50px;
         text-align: center;
         line-height: 50px;
         margin-bottom: 15px;
         margin-right: 36px;
       }
     }
   }
</style>