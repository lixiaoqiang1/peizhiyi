<template>
  <div class="page-user">
    <div class="page-user-header">
      <!-- 登出按钮 -->
      <p>
        <span class="loginOutBtn" @click="logoutClick">退出</span>
      </p>
      <p>
        <!-- 登录按钮 -->
        <img :src="require('@/assets/images/header_photo.png') " class="headerPhoto">
      </p>
      <p v-if="!username" class="headerLoginBtn" @click="loginClick">
        <a>登录/注册 ></a>
      </p>
      <!-- 登录后显示用户名 -->
      <p v-else class="headerLoginBtn">
        <a>{{ username }}111</a>
      </p>
    </div>
    <div class="listItem">
      <ul>
        <li v-for="(item, index) of list" :key="index">
          <a :href="item.href">
            <div class="div_item">
              <div class="s_left">
                <img class="left_icon" :src="item.icon" alt="">
                <div>
                  <p class="name">{{ item.name }}</p>
                </div>
              </div>
              <i v-if="item.arrow" class="right_arrow" />
            </div>
            <div v-if="item.isSep" class="label_sep" />
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="less" rel="stylesheet/less">
.page-user {
  .page-user-header {
    height: 350px;
    //overflow: scroll;
    background: url("../assets/images/bg_header.png");
    background-size: cover;
    overflow-x: hidden;
    .headerPhoto {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 2px solid #fff;
      top: 80px;
      left: 80px;
      position: absolute;
    }
    .headerLoginBtn {
      top: 110px;
      position: relative;
      left: 260px;
      font-size: 40px;
      a {
          color: #fff;
      }
    }
    .headerLogout {
      margin-left: 20%;
      color: #fff;
      font-size: 20px;
    }
    .loginOutBtn {
      color: #fff;
      font-size:28px;
      float:right;
      padding:20px;
    }
  }
  .listItem {
    background-color: #f5f5f5;
    padding-top: 20px;
    ul {
        list-style: none;
        background-color: #fff;
    }
    .div_item {
        width: 686px;
        height: 90px;
        font-size: 30px;
        display: flex;
		    justify-content: space-between;
        padding: 0 32px;
    }
    .s_left {
        width: 466px;
        color: #333;
        display: flex;
    	  justify-content: flex-start;
        .left_icon {
            display: inline-block;
            width: 40px !important;
            height: 40px;
            margin-right: 36px;
            position: relative;
    		    top: 25px;
		    }
        div {
            .name {
                font-size: 30px;
                line-height: 30px;
                color: #666;
                margin: 32px 0 28px;
                padding: 0;
            }
        }
    }
    .label_sep {
        height: 1px;
        width: 718px;
        background-color: #e5e5e5;
        margin-left: 32px;
        margin-bottom: 0;
        margin-top: 0;
    }
    .right_arrow{
			content: "";
			height: 20px;
			width: 20px;
			border-width: 1.5px 1.5px 0 0;
			border-color: #666;
			border-style: solid;
			transform: rotate(45deg);
			display: inline-block;
			margin-right: 30px;
			margin-top: 34px;
		}
  }
}

</style>

<script type="text/javascript">
import { mapGetters } from 'vuex'
// import { UdTextListItem } from '@udesk/mbank-ui'
export default {
  // components: {UdTextListItem},
  data() {
    return {
      targetLocation: '',
      // islogged: false,
      list: [
        {
          name: 'udesk组件',
          isSep: true,
          arrow: true,
          href: '#/listMyComponents',
          icon: require('@/assets/images/list_form.png')
        },
        {
          name: '个性化设置',
          isSep: true,
          arrow: true,
          href: '#/setting',
          icon: require('@/assets/images/list_setting.png')
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    // 跳转登录H5App
    loginClick() {
      this.$router.push('/login')
    },

    logoutClick() {
      this.$store.dispatch('user/logout').then((res) => {
        this.$router.push('/login')
      })
      this.$store.dispatch('indexNav/handleClick', '首页')
    }
  }
}
</script>
