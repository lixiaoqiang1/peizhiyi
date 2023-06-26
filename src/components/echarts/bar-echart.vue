<template>
  <div>
      <div class="bar" :id="customId">
      </div>
  </div>
</template>

<script>
import { Constant } from '@/utils/const'
export default {
    name:"bar-echart",
    props:{
        //图表的唯一Id
        customId:{
            type:String,
            required:true
        },
        //标注标签定制
        tags:{
            type:Array,
            required:true,
            default(){
                return []
            }
        },
        //用于填充图表的数据
        dataArray:{
            type:Array,
            default(){
                return []
            }
        },
        //柱状图的颜色
        barColor:{
            type:Array,
            default(){
                return["#E4BE9E","#C5885A","#76DEB1","#77C1FE","#75839F","#F3C543"]
            }
        },
        //纵轴显示格式
        yAxisFormatter:{
            type:String,
            validator:function(value){
                return [Constant.VALUE,Constant.PERCENTAGE].includes(value);
            },
            default:Constant.VALUE
        },
        //柱状图方向
        direction:{
            type:String,
            validator:function(value){
                return [Constant.VERTICAL,Constant.HORIZONTAL].includes(value);
            },
            default:Constant.VERTICAL
        },
        //标题水平位置
         legendX:{
            type:String,
            validator:function(value){
                return [Constant.LEFT,Constant.CENTER,Constant.RIGHT].includes(value);
            },
            default:Constant.CENTER,
        },
        //标题垂直位置
        legendY:{
            type:String,
            validator:function(value){
                return [Constant.TOP,Constant.CENTER,Constant.BOTTOM].includes(value);
            },
            default:Constant.BOTTOM,
        },
        //y轴字体大小
        yAxisFontSize:{
            type:Number,
            default:10
        },
        //标题
        title:{
            type:String,
            default:''
        },
        //标题水平方向的位置
        titleX:{
            type:String,
            default:Constant.LEFT
        },
        //标题竖直方向的位置
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
        }
    },
    mounted(){
        const myChart=this.$echarts.init(document.querySelector(`#${this.customId}`));

        const option={
            legend:{x:this.legendX,y:this.legendY},
            title:{
                text:this.title,
                x:this.titleX,
                y:this.titleY,
                textStyle:{
                    fontSize:this.titleFontSize,
                    fontWeight:this.titleFontWeight
                }
            },
            tooltip:{
                formatter:(param)=>{
                    const color=param.color;
                    const htmlStr=`<div>${param.name}<br/>
                                    <span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${color}"></span>
                                    ${param.seriesName}:${
                        param.data[param.seriesIndex+1]
                    }${this.yAxisFormatter==Constant.PERCENTAGE?"%":""}</div>`;
                    return htmlStr;
                },
            },
            dataset:{
                source:[]
            },
            xAxis:{
                type:
                  this.direction==Constant.VERTICAL
                    ?Constant.CATEGORY
                    :Constant.VALUE
            },
            gard:{
                left:600,
                containLabel:true
            },
            yAxis:[
              {
                type:
                    this.direction==Constant.VERTICAL
                      ?Constant.VALUE
                      :Constant.CATEGORY,
                axisLabel:{
                    show:true,
                    interval:Constant.AUTO,
                    formatter:
                        this.yAxisFormatter==Constant.VALUE?"{value}":"{value} %",
                    textStyle:{
                        fontSize:this.yAxisFontSize,
                        fontColor:'#000'
                    }
                },
                show:true,
                offset:-4
              }
            ],
            series:[],
            color:this.barColor,
        };

        option.dataset.source.push(this.tags);
        option.dataset.source.push(...this.dataArray);
        const seriesOption=
        {
            type:Constant.BAR,
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:Constant.TOP,
                        formatter:(param)=>{
                            let formatString=param.data[param.seriesIndex+1];
                            formatString+=
                                this.yAxisFormatter==Constant.PERCENTAGE?"%":"";
                            return formatString;
                        },
                        textStyle:{
                            color:Constant.BLACK,
                            fontSize:12
                        }
                    }
                }
            }
        };
        for(let i=1;i<this.tags.length;i++){
            option.series.push(seriesOption);
        }
        myChart.setOption(option);

        this.$bus.$on("setBar",(id,options)=>{
        if(id==this.customId)
        {
          myChart.setOption(options)
        }
      })
    },
    
}
</script>

<style lang="less" scoped>
    .bar{
        width:100%;
        height: 600px;
        background-color: #ffffff;
        border-radius: 10px;
    }
</style>