<template>
  <div class="page-search">
    <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
    <mt-search autofocus v-model="value" :result="filterResult" placeholder="请输入组件名称">
      <mt-cell v-for="item of filterResult" :key="item" :title="item" @click.native="select(item)"/>
    </mt-search>
  </div>
</template>

<script>
export default {
  name: "page-search",

  data() {
    return {
      value: "",
      defaultResult: [
        // "action-sheet",
        // "badge",
        // "button",
        // "cell-swipe",
        // "cell",
        // "checklist",
        // "datetime-picker",
        // "field",
        // "header",
        // "index-list",
        // "indicator",
        // "infinite-scroll",
        // "lazyload",
        // "navbar",
        // "palette-button",
        // "picker",
        // "popup",
        // "progress",
        // "pull-down",
        // "pull-up",
        // "radio",
        // "range",
        // "search",
        // "spinner",
        // "swipe",
        // "switch",
        // "tab-container",
        // "tabbar",
        // "toast",
        // "list",
        // "form",
        // "weekCalendar",   //后续添加的搜索组件名称  袁茂庭
        "setting",
        // "request",
        // "x-number",
        // "countdown",
        // "previewer",
        // "uploader-file",
        // "image-preview",
        // "echarts",
        // "notify",
        // "remote-week-calendar",
        // "local-week-calendar",
        // "remote-search",
        // "local-search",
        // "remote-pull-down",
        // "local-pull-down",
        // "remote-pull-up",
        // "local-pull-up",
        // "remote-infinite-scroll",
        // "local-infinite-scroll",
        // "remote-lazy-load",
        // "local-lazy-load",
        // "echarts-line",
        // "echarts-chord",
        // "echarts-instrument",
        // "echarts-funnel",
        // "echarts-bar",
        // "echarts-area",
        // "echarts-population",
        // "echarts-bubble",
        // "echarts-candlestick",
        // "echarts-doughnut",
        // "echarts-radar",
        // "echarts-scatter",
        // "echarts-pie",
        // "echarts-thermal",
        // "echarts-tree",
        // "echarts-rectangular-tree",
        // "echarts-river",
        // "echarts-word-cloud",
        // "echarts-venn",
        // "echarts-tree-relationship"
      ]
    };
  },

  methods: {
    // 根据选中的组件名称，跳转到相应的界面
    select(item) {
      if(item.startsWith("echarts-")) {
        this.$router.push("/" + item.substring(item.indexOf("-")+1));
      }
      else{
        this.$router.push("/" + item);
      }
      
    },
    handleBack() {
      // 返回上一页
      this.$router.back(-1);
    }
  },
  computed: {
    filterResult() {
      /* 不区分大小写对输入的值进行正则匹配，如果defaultResult数组中的元素内容中包含
      输入的值，返回该元素的值*/
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  }
};
</script>

<style lang="scss">
.page-search {
  height: 100%;
  .mint-searchbar-inner .mintui-search {
    font-size: 16px;
    margin-right: 5px;
    .mint-searchbar {
      float: right;
      width: 98%;
    }
  }
  .mint-button {
    padding: 0 0 0 5px;
    float: left;
    background-color: #f5f5f5;
    border: 0 solid #fff;
    float: left;
    height: 40px;
    z-index: 10;
  }
  .mint-button--default {
    box-shadow: 0 0 0 #b8bbbf;
    color: #333;
  }
}

.page-search{
  background-color: #f5f5f5;
  .mint-button{
    height: 88px;
    padding: 0;
    .mintui{
      font-size: 36px;
      margin-left: 15px;
    }
  }
  .mint-search{
    height: 88px;
    .mint-searchbar{
      height: 100%;
      .mint-searchbar-inner{
        height: 56px;
        .mintui{
          font-size: 32px;
          display: inline-block;
          width: 32px;
          height: 32px;
        }
        input{
          font-size: 30px;
        }
      }
      .mint-searchbar-cancel{
        font-size: 28px;
      }
    }
    .mint-search-list{
      padding: 0;
      margin-top: 88px;
      .mint-cell{
        min-height:60px;
        .mint-cell-wrapper{
          padding-left: 15px;
          .mint-cell-text{
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
