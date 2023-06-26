<template>
  <div class="page-setting">
    <div class="page-tabbar">
      <mt-header title="系统设置" fixed class="bank-header">
        <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
      </mt-header>
      <div class="page-setting-wrapper">
        <div class="select-fontsize">
          <mt-radio class="page-part" title="字体设置:" v-model="fontSize" :options="optionsData"/>
        </div>
        <div class="select-fontsize">
          <span class="color-title">主题设置</span>
            <ul>
              <li 
              v-for='(item,index) in colorList' 
              :key='index' 
              :style="{backgroundColor:item}"
              @click='clickBgItem(index)'
              :class="indexItem == index?'color':''"
              ></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setFontSize, setCookies, getCookies, setBgColor} from '@/utils/preference'
import { saveFontSize, getFontSize, saveBgColor, getBgColor } from "../../api/demo";

export default {
  data() {
    return {
      fontSize:'30',
      optionsData:['24','30','36'],
      colorList:['#ffffff','#339999','#12b993','#14589f','#4381e6'],
      indexItem:0
    }
  },
  async mounted() {
    //从cookie 中 获取 fontSize
    let size = getCookies('fontSize') || '30'

    //从mock中获取
    // let size = await getFontSize(); 
    // if(size){
    //   this.fontSize = size.data 
    // }else{
    //   this.fontSize = '30' // 默认15px
    // }

    this.fontSize = size

    //获取当前主题颜色
    let bgColor = getCookies('bgColor') || '#ffffff'

    //获取mock存储的主题颜色
    // let bgColorData = await getBgColor()
    // let bgColor = bgColorData.data.bgColor || '#ffffff'

    this.indexItem = this.colorList.indexOf(bgColor)
  },
  watch: {
    fontSize(val){
      // 将字体大小存储在cookies里
      setCookies('fontSize', val, 30)

      // 将字体大小存储在mock里
      // saveFontSize(val).then((res) => {
      //   console.log('字体大小存储成功',res)
      // })

      // 为Body上设置字体样式
      setFontSize(val)
    }
  },
  methods: {
    handleBack() {
    // 返回上一页
    this.$router.back(-1);
    },    
    clickBgItem(index){
      this.indexItem = index
      //将当前选中主题颜色存入cookie 中
      setCookies('bgColor',this.colorList[index],30)

      //将当前选中主体颜色存入mock 中
      // saveBgColor({bgColor:this.colorList[index]}).then((res)=>{
      //   console.log('主题存储成功')
      //   console.log(res)
      // })

      //设置选中颜色为主题色
      setBgColor(this.colorList[index])
    }
  }
}
</script>

<style lang="scss" >
.page-setting {
  .page-tabbar {
    overflow: hidden;
    height: auto;
  }
  .page-setting-wrapper{
    border: 1px dashed #a9acb1;
      width: 90%;
      margin: 0 auto;
    margin-top: 60px;
      .mint-radiolist-title{
        font-weight: 800;
      }
  }
  .range{
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%,0%);
    width: 90%;
    .mt-range-progress{
      background-color: #a9acb1;
    }
  }

    .scaleLine{
    line-height: 30px;
    height: 30px;     
    font-size: 3px;     
    position: absolute;
    bottom: 15px;
    left: 50%;    
    transform: translate(-50%,0%);
    }  
}
</style>
