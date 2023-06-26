<template>
  <div class="index-view">
    <!-- mint components开始 -->
    <section>
      <div class="statusBar" />
      <mt-header title="UDesk 移动 H5 模板工程" fixed>
        <mt-button slot="right" icon="search" @click="handleBack" />
        <mt-button slot="right" icon="more" @click="handleNotice" />
      </mt-header>
      <div class="wrapper">
        <div class="myPage" />
        <div class="content-one">
          <h3>- UDesk 组件 -</h3>
          <div v-for="(item, index) in mintRoutes.slice(0, 9)" :key="index" class="content-left-img">
            <router-link class="list-item" :to="item.path">
              <img :src="require('@/assets/images/'+item.image+'.png')" class="contentImg">
              <p>{{ item.name }}</p>
            </router-link>
          </div>
          <div v-for="(item, index) in indexMores.slice(0, 1)" :key="index+'label'" class="content-left-img">
            <router-link class="list-item" :to="item.path">
              <img :src="require('@/assets/images/'+item.image+'.png')" class="contentImg">
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script >
import mintRoutes from '../router/mintRouter'
import indexMores from '../router/indexMore'

// 主页面，列表
export default {
  data() {
    return {
      mintRoutes,
      indexMores
    }
  },
  methods: {
    handleBack() {
      this.$router.push('/indexSearch')
    },
    handleNotice() {
      this.$router.push('/indexNotice')
    }
  }
}
</script>
<style lang="scss">
.mint-tab-container-wrap {
  padding-bottom: 97px;
}

body {
  margin: 0;
}
.index-view {
  h3 {
  font-size: 36px;  // 引导性文字和标题栏字体
  color: #000;  // 标题栏字体颜色
  text-align: center;
  line-height: 64px;
  height: 64px;  // 列表标题高度
  margin: 0px 0px 14px 0px;
 }
  margin-top: 88px;
  .mint-header {
    background-color: #fafafa;
    color: #333;
    .mint-header-title {
      font-weight: 600;
      flex: none;
    }
    .mint-button {
      color: #333;
      margin-left: 3px;
      .mint-button-text {
        letter-spacing: 1px;
        font-weight: 600;
      }
    }
  }
 .wrapper {
    margin: 0px 32px;
  }
  .myPage {
    background-color: #fafafa;
    color: inherit;
    height:200px;
    margin:32px 0;
    border-radius: 10px;
    // height: calc(100vh * 0.25);
    //overflow: scroll;
    background: url("../assets/images/bg.jpg");
    // background: url("../../assets/bg_header.png");
    background-size: cover;
    overflow-x: hidden;
  }
  .headerPhoto {
    width: 60px;
    height: 60px;
    top: 7%;
    left: 8%;
    position: absolute;
  }
  .headerLoginBtn {
    top: 30%;
    left: 32%;
    position: relative;
    color: #fff;
    font-size: larger;
  }
  .content-one {
    min-height: 50px;
    overflow: hidden;
    border-bottom: 5px solid #f5f5f5;
    padding-bottom: 20px;  // 内容模块之间间距
    .content-left-img {
      margin-bottom: 20px;
      float: left;
      width: 20%;
      text-align: center;
      .list-item {
       color: #222;
        text-decoration: none;
        font-family: inherit;
        .contentImg {
          width: 64px;
          height: 64px;
        }
        p {
          margin: 0 auto;
          padding-top: 16px;
          font-size: 26px;
          // 字符太长，省略 --shuhh
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  .box-bottom {
    height: 10px;
    background-color: 10px;
  }
}
</style>
