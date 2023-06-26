<template>
  <div>
      <div class="bar" :id="customId"></div>
      <div class="rightTop">111</div>
  </div>
</template>

<script>
import { Constant } from '@/utils/const'

export default {
    name:"my-bar",
    props:{
        customId:{
            type:String,
            required:true
        },
        tags:{
            type:Array,
            required:true,
            default(){
                return []
            }
        },
        dataArray:{
            type:Array,
            default(){
                return []
            }
        },
        barColor:{
            type:Array,
            default(){
                return["#76DEB1","#77C1FE","#75839F","#F3C543"]
            }
        },
        yAxisFormatter:{
            type:String,
            validator:function(value){
                return [Constant.VALUE,Constant.PERCENTAGE].includes(value);
            },
            default:Constant.VALUE
        },
        direction:{
            type:String,
            validator:function(value){
                return [Constant.VERTICAL,Constant.HORIZONTAL].includes(value);
            },
            default:Constant.VERTICAL
        },
         legendX:{
            type:String,
            validator:function(value){
                return [Constant.LEFT,Constant.CENTER,Constant.RIGHT].includes(value);
            },
            default:Constant.CENTER,
        },
        legendY:{
            type:String,
            validator:function(value){
                return [Constant.TOP,Constant.CENTER,Constant.BOTTOM].includes(value);
            },
            default:Constant.BOTTOM,
        },
        yAxisFontSize:{
            type:Number,
            default:12
        },
        title:{
            type:String,
            default:''
        },
        titleX:{
            type:String,
            default:'left'
        },
        titleY:{
            type:String,
            default:'top'
        },
        titleFontSize:{
            type:Number,
            default:12
        },
        titleFontWeight:{
            type:String,
            default:'normal'
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
                    interval:"auto",
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
        const seriesOption={
            type:"bar",
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:"top",
                        formatter:(param)=>{
                            let formatString=param.data[param.seriesIndex+1];
                            formatString+=
                                this.yAxisFormatter==Constant.PERCENTAGE?"%":"";
                            return formatString;
                        },
                        textStyle:{
                            color:"black",
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
    }
}
</script>

<style lang="less" scoped>
    .bar{
        width:100%;
        height: 600px;
    }
    .rightTop{
        position: absolute;
    }
</style>