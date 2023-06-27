<template>
  <div class="login-container">
    <form ref="loginForm" class="login-form">
      <div type="form">
        <!-- <img :src="'../../../static/header_photo.png'" class="headerPhoto" /> -->
        <img :src="require('@/assets/images/header_photo.png') " class="headerPhoto">
        <mt-field v-model="username" class="inputItem" placeholder="用户名" clear />
        <mt-field v-model="password" class="inputItem" type="password" placeholder="密码" clear />
      </div>
    </form>
    <div class="buttonItem">
      <!-- <button class="ud-btn" type="primary" @click="login">{{ login_message }}</button> -->
      <mt-button type="danger" size="large" @click="login">{{ login_message }}</mt-button>
    </div>
    <div class="userItem">
      <div>角色：管理员 用户名：admin 密码：111111</div>
      <div>角色：用户 &nbsp&nbsp 用户名：user&nbsp&nbsp 密码：111111</div>
      <div @click="onclickedit">修改手机号</div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in datalist" :key="index" @click="onclick(item,index)">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { setTimeout } from 'timers'
import { setCookies } from 'utils/preference'
export default {
  data() {
    return {
      username: '',
      password: '',
      login_message: '登录',
      datalist: [
        { title: '测试授权', router: 'loginCode' }
      ]
    }
  },

  created() {},

  mounted() {
    document.title = '登录'
  },

  close() {},

  methods: {
    onclick(row) {
      const params = {}
      this.$router.push({ path: row.router, query: params })
    },
    onclickedit() {
      this.$router.push({
        push: 'editAccount'
      })
    },
    login() {
      setCookies('Admin-Token', '111')
      this.$router.push('/')
      this.login_message = '登录中...'
      // 校验
      if (!this.username) {
        this.login_message = '登录'
        Toast('请输入用户名')
        return
      }

      if (!this.password) {
        this.login_message = '登录'
        Toast('请输入密码')
        return
      }
      var params = { password: this.password, username: this.username }
      this.$store.dispatch('user/login', params).then((res) => {
        if (res) {
          Toast({
            message: res,
            duration: 1000
          })
          setTimeout(() => {
            this.login_message = '登录'
          }, 1000)
        } else {
          this.$router.push('/')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  // background: url("../assets/images/bg.jpeg");
  // background-size: cover;
  background-color: #fff;
  input.mint-field-core {
    padding: 5px;
  }
  .login-form {
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
  }
  .headerPhoto {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 20% auto 10%;
  }
  .buttonItem {
    padding:25px 0 15px;
  }
  .title {
    font-size: 36px;
    font-weight: 200;
    color: #666;
    margin: 115px auto 50px auto;
    text-align: center;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #fff;
    vertical-align: middle;
    width: 500px;
  }
  .form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .form-item__content {
    line-height: 88px;
    position: relative;
    font-size: 30px;
  }
  .inputItem {
    height: 88px;
    border-radius: 3px;
    text-align: center;
    .mint-cell-wrapper {
        font-size: 30px;
        line-height: 88px;
        height: 88px;
        border-bottom: 1px solid #ffa900;
        .mint-field-clear {
            height: 88px;
        }
        .mintui-field-error {
          font-size: 32px;
        }
    }
  }
  .userItem {
    text-align: center;
    margin-top: 5px;
    font-size: 24px;
    color: #666;
  }
}
.list ul li{
  line-height: 60px;text-align: center;
}
.am-list.am-list-form .am-list-item ::-webkit-input-placeholder,
.am-list.form .am-list-item ::-webkit-input-placeholder {
  font-size: 30px;
}
</style>
