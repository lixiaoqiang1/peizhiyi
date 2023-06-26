<template>
  <div class="main">
    <div :id="customId" class="pie"></div>
  </div>
</template>

<script>
import { Constant } from '@/utils/const'

export default {
    name:'pie',
    props:{
        //图表唯一标识
        customId:{
          type:String,
          required:true
        },
        //标题
        title:{
          type:String,
          default:''
        },
        //标题水平位置
        titleX:{
            type:String,
            default:Constant.LEFT
        },
        //标题竖直位置
        titleY:{
            type:String,
            default:Constant.TOP
        },
        //标题字体大小
        titleFontSize:{
            type:Number,
            default:12
        },
        //标题粗细
        titleFontWeight:{
            type:String,
            default:Constant.NORMAL
        },
        //用于画环状图的数据
        dataArray:{
          type:Array,
          default(){
            return []
          }
        },
        //环状图颜色配置
        pieColor:{
          type:Array,
          default(){
            return ['#779DF7','#58CEB5','#75839F','#F3C543']
          }
        },
        //环状图内外环半径
        radius:{
          type:Array,
          default(){
            return ['30%','50%']
          }
        },
        //标注字体大小
        labelFontSize:{
          type:Number,
          default:12
        },
        //标注字体颜色
        labelFontColor:{
          type:String,
          default:'#000'
        },
        //图例水平方向的位置
        legendX:{
          type:String,
          default: Constant.CENTER
        },
        //图例竖直方向的位置
        legendY:{
          type:String,
          default:Constant.BOTTOM
        },
        //图例排布方向
        legendDirection:{
          type:String,
           validator:function(value){
                return [Constant.VERTICAL,Constant.HORIZONTAL].includes(value);
            },
            default:Constant.HORIZONTAL
        },
        //图例形状
        legendIcon:{
          type:String,
          validator:function(value){
            return [Constant.CIRCLE,Constant.RECT,Constant.ROUND_RECT,Constant.TRIANGLE,Constant.DIAMOND,Constant.PIN,Constant.ARROW].includes(value);
          },
          default:Constant.RECT
        },
        //标注线1长度
        labelLineLength1:{
          type:Number,
          default:20
        },
        //标注线2长度
        labelLineLength2:{
          type:Number,
          default:20
        },
        //标注线颜色
        labelLineColor:{
          type:String,
          default:'#000'
        }
    },
    methods:{
      
    },
    mounted()
    {
      let myPie=this.$echarts.init(document.querySelector(`#${this.customId}`))
      let options={
        title:
        {
                text:this.title,
                x:this.titleX,
                y:this.titleY,
                textStyle:{
                    fontSize:this.titleFontSize,
                    fontWeight:this.titleFontWeight
                }
        },
        tooltip:{
          trigger:'item',
          formatter:'{a}{b}<br/>{c} {d}%',
        },
        legend:{
          x:this.legendX,
          y:this.legendY,
          orient:this.legendDirection,
          itemWidth:8,
          itemHeight:8,
          icon:this.legendIcon,
        },
        series:[
          {
            name:'',
            type:'pie',
            radius:[],//控制图形大小
            avoidLabelOverlap:true,
            label:
            {
              normal:
              {
                show:true,
                formatter:(param)=>{
                  return param.data.name+'\r\n'+param.percent+'%'
                },
                textStyle:{
                  fontSize:this.labelFontSize,
                  color:this.labelFontColor
                },
              },
            },
            labelLine:{
              normal:{
                lineStyle:{
                  color:this.labelLineColor
                },
                smooth:0.2,
                length:this.labelLineLength1,
                length2:this.labelLineLength2,
              }
            },
            data:[],
            color:[]
          }
        ]
      }
      options.series[0].data.push(...this.dataArray)
      options.series[0].color.push(...this.pieColor)
      options.series[0].radius.push(...this.radius)
      myPie.setOption(options)


      this.$bus.$on("setPie",(id,options)=>{
        if(id==this.customId)
        {
          myPie.setOption(options)
        }
      })
    }
}
</script>

<style lang="less" scoped>
.main{
    margin-top: 15px;
}
.pie{
  width:100%;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
}
</style>