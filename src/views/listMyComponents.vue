<template>
  <div class="list-view-new components-page">
    <mt-header fixed title>
      <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
    </mt-header>
    <section>
      <div class="myPage">
        <img src="@/assets/images/index_components.png" class="headerPhoto">
        <p class="headerLoginBtn">UDesk 组件</p>
      </div>
      <ul class="list">
        <li v-for="(item, index) in mintRoutes" :key="index">
          <router-link class="list-item" :to="item.path">
            <img :src="require('@/assets/images/'+item.img+'.png')" class="list-img">
            {{item.name}}
            <i class="mint-cell-allow-right"></i>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script >
import mintRoutes from "../router/mintRouter";

// 主页面，列表
export default {
  data() {
    return {
      mintRoutes
    };
  },
  methods: {
    handleBack() {
      // 返回上一页
      this.$router.back(-1);
    }
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}
.list-view-new {
  .mint-header{
    padding: 0;
    .mint-header-button.is-left {
      display: flex;
      .mint-button{
        width: 48px;
        height: 48px;
        margin: 0 32px;
        padding: 0;
        .mint-button-icon{
          display: inline;
          vertical-align: baseline;
        }
        i {
          display: flex;
          width: 40px;
          height: 40px;
          font-size: 40px;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
  .myPage {
    background-color: #fafafa;
    color: #333;
    height: 270px;
    //overflow: scroll;
    background: url("../assets/images/bg-index.png");
    background-size: cover;
    overflow-x: hidden;
    text-align: center;
    .headerPhoto {
      width: 96px;
      height: 96px;
      margin: 50px 0 10px;
    }
    .headerLoginBtn {
      margin-top: 0;
      color: #202020;
      font-weight: 600;
      font-size: 36px;
    }
  }
  section {
    margin-top: -88px;
  }
  .list-img {
    width: 48px;
    height: 48px;
    margin:12px 36px 0 32px;
    position: relative;
    top: 12px;
  }
  .mint-cell-allow-right::after {
    top: auto;
    margin-top: 50px;
  }
  .list {
    // padding: 0 10px 0;
    margin-top: 0;
    background: #f4f4f4;
    li {
      height: 90px;
      list-style: none;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      // padding-top: 5px;
      background: #fff;
      line-height: 90px;
      .list-item {
        color: inherit;
        text-decoration: none;
        .mint-cell-allow-right::after {
          width: 21px;
          height: 21px;
          right: 32px;
        }
      }
    }
  }
}
</style>