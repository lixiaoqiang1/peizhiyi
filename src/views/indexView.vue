<template>
  <div class="page-tabbar">
    <div class="page-wrap">

      <mt-tab-container v-model="selected" class="page-tabbar-container">
        <mt-tab-container-item id="首页">
          <index-nine />
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <user-view />
        </mt-tab-container-item>
        <mt-tab-container-item id="信用卡">
          <div class="page-about-logo">
            <img src="@/assets/images/mobileLogo.png">
            <p class="about-title">UDesk 移动 H5 模板工程</P>
            <p class="about-version">V5.1.0 for mobile</P>
          </div>
          <div class="page-about-content">
            <h3>简介</h3>
            <hr style="border: 0.5px solid #f5f5f5;">
            <p class="page-introduce">
              本工程基于 UDesk 移动 H5 框架构建，是一个使用 Vue 技术栈(vue、vue-router、vuex)实现的单页应用，内置了动态路由、状态管理、权限验证、异步请求、前端数据模拟(Mock)、个性化设置等单页应用必需模块，包含简单的页面布局和页签样例，适合用于企业级中后台产品的正式研发。
            </p>
            <p class="page-introduce">
              组件和交易样例学习请使用 UDesk for Mobile 样板工程(udesk-mobile-boilerplate)。
            </p>
            <p class="page-introduce">
              统一客户端应用平台(UDesk)移动 H5 框架，基于 Vue 技术栈提供运行框架、UI 组件库、组件工程、模板工程、样板工程、开发工具（脚手架工具）等功能模块，适用于需通过移动端 H5 容器访问的应用系统，支持独立浏览器（如 UC 等）、微信内置浏览器、UMAP 应用内嵌 WebView 等浏览渠道。
            </p>
            <h3>技术支持</h3>
            <hr style="border: 0.5px solid #f5f5f5;">
            <p class="page-support">请在 dt.abc 提交工单类问题：</p>
            <p class="page-support">问题来源方：请填项目组名称</p>
            <p class="page-support">问题支持方：统一客户端应用平台(UDesk)</p>
            <p class="page-support">支持版本号：5.x-mobile</P>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="关于">
          <indexNotice />
        </mt-tab-container-item>
      </mt-tab-container>

    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页" @click.native="handleClick('首页')">
        <img v-if="selected == '首页'" slot="icon" src="@/assets/images/component2.png">
        <img v-else slot="icon" src="@/assets/images/component1.png">
        客户管理
      </mt-tab-item>
      <mt-tab-item id="投资" @click.native="handleClick('投资')">
        <img v-if="selected == '投资'" slot="icon" src="@/assets/images/component2.png">
        <img v-else slot="icon" src="@/assets/images/component1.png">
        投资
      </mt-tab-item>
      <mt-tab-item v-if="type=='admin' ? true : false" id="信用卡" @click.native="handleClick('信用卡')">
        <img v-if="selected == '信用卡'" slot="icon" src="@/assets/images/component2.png">
        <img v-else slot="icon" src="@/assets/images/component1.png">
        信用卡
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="handleClick('我的')">
        <img v-if="selected == '我的'" slot="icon" src="@/assets/images/component2.png">
        <img v-else slot="icon" src="@/assets/images/component1.png">
        我的
      </mt-tab-item>
      <mt-tab-item id="关于" @click.native="handleClick('关于')">
        <img v-if="selected == '关于'" slot="icon" src="@/assets/images/component2.png">
        <img v-else slot="icon" src="@/assets/images/component1.png">
        关于
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import indexNine from '@/views/indexNine'
import userView from '@/views/userView'
import indexNotice from '@/views/indexNotice'
import { mapGetters } from 'vuex'

export default {
  name: 'PageTabbar',
  components: {
    'index-nine': indexNine,
    'user-view': userView,
    'indexNotice': indexNotice
  },
  data() {
    return {
      // selected: "首页"
    }
  },
  computed: {
    ...mapGetters(['type']),
    selected: {
      get: function() {
        return this.$store.state.indexNav.selected
      },
      set: function() {}
    }

  },
  mounted() {
    document.title = 'UDesk 移动 H5 模板工程'
  },
  methods: {
    handleClick(id) {
      this.$store.dispatch('indexNav/handleClick', id)
    }
  }
}
</script>

<style lang="scss">
.page-tabbar {
  overflow: hidden;
  height: 100vh;
  color: #333;
  .page-about-logo {
    text-align: center;
    margin-top: 100px;;
    img {
      width: 100px;
      height: 100px;
    }
    .about-title {
      font-size: 20px;
      font-weight: 600;
      margin-top: 30px;
    }
    .about-version {
      margin-top: 20px;
    }
  }
  .page-about-content {
    margin-top: 40px;
    padding: 0 40px;
    h3 {
      font-weight: 600;
    }
    .page-introduce {
      line-height: 1.6;
      color: #777;
      font-size: inherit;
      text-indent: 2em;
      margin-bottom: 20px;
    }
    .page-support {
      line-height: 1.6;
      color: #777;
      font-size: inherit;
    }
  }
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
.mint-tabbar.is-fixed {
  bottom: -1px;
  border-top: 1px solid #f5f5f5;
  .mint-tab-item {
    background-color: #fff;
    &.is-selected {
      background-color: #f5f5f5;
    }
  }
}

.mint-tabbar.is-fixed{
  height: 98px;
  box-sizing: border-box;
}
.mint-tab-item{
  padding: 0 !important;
}
.mint-tab-item-icon{
  width: 64px !important;
  height: 64px !important;
  margin: 2px auto 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mint-tab-item-icon>img{
  width: 50px;
  height: 50px;
}
.mint-tab-item-label{
  font-size: 20px !important;
  font-weight: bold;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: #00c3a3 !important;
}
</style>
