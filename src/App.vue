<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {},
  watch: {},
  mounted() {},
  created() {}
}
</script>

<style scoped lang="less">
html {
  background: #eee;
  min-height: 100%;
}
#app {
  font-family: "Helvetica", "Pingfang SC", "Hiragino Sans GB", "Arial",
    "Droid Sans", "Microsoft YaHei", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app .header {
  background-size: cover;
}
#app /deep/ #treasureDiagnoseReportPie > div:first-child {
  width: 100% !important;
  height: 100% !important;
}
/deep/ #treasureDiagnoseReportPie {
  background-color: transparent !important ;
}
/deep/ #treasureDiagnoseReportPie > div:first-child {
  width: 100% !important;
  height: 100% !important;
}
/deep/ #treasureDiagnoseReportPie > div > canvas {
  width: 100% !important;
  height: 100% !important;
  // background-color：red;
}

/deep/ #diagnoseReportBar > div:first-child {
  width: 100% !important;
  height: 100% !important;
}
/deep/ #diagnoseReportBar > div > canvas {
  /* background:green; */
  width: 100% !important;
  height: 100% !important;
}
/deep/ #suggestionPieBar {
  background-color: transparent !important ;
}

/deep/ #suggestionPieBar > div:first-child {
  /* background-color: red; */
  width: 100% !important;
  height: 100% !important;
}
/deep/ #suggestionPieBar > div > canvas {
  /* background:green; */
  width: 100% !important;
  height: 100% !important;
}

/deep/ #promoteSuggestionBar {
  background-color: transparent !important ;
}

/deep/ #promoteSuggestionBar > div:first-child {
  /* background-color: red; */
  width: 100% !important;
  height: 100% !important;
}
/deep/ #promoteSuggestionBar > div > canvas {
  /* background:green; */
  width: 100% !important;
  height: 100% !important;
}
.className {
  font-size: 24px;
  position: relative;
}
.msgBox {
  position: absolute;
  // left: 0;
  right: 0;
  top: -64px;
  margin: auto;
  // width: 28px;
  height: 28px;
  border-radius: 14px;
  background: #ff3b30;
  text-align: center;
  line-height: 28px;
  min-width: 28px;
  color: white;
  font-size: 24px;
  padding: 0 2px;
}
/deep/.classImg {
  width: 60px !important;
  height: 60px !important;
}
/deep/.van-tabbar-item__icon {
  width: 60px;
  height: 60px;
}

/deep/.van-tabbar--fixed {
  height: 144px !important;
}

/deep/ .van-list__finished-text {
  font-size: 24px;
}
/deep/ .van-loading__text {
  font-size: 24px;
}
/deep/ .van-pull-refresh__head {
  font-size: 24px;
}
</style>
