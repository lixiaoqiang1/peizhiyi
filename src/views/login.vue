<template>
  <div class="login-container">
    <div class="container">
      <img :src="require('@/assets/images/header_photo.png') " class="headerPhoto"></img>
      <form ref="loginForm" class="login-form">
        <div type="form">
          <md-field>
            <md-input-item
              v-model="username"
              type="phone"
              title="手机号"
              clearable
              placeholder="请输入手机号"
            />
            <md-input-item
              v-model="password"
              type="password"
              title="密码"
              clearable
              placeholder="请输入密码"
            />
          </md-field>
        </div>
      </form>
      <div class="buttonItem">
        <!-- <md-button type="primary" @click="login">{{ login_message }}</md-button> -->
        <EButton :type="'primary'" :loading="false" @click="login">{{ login_message }}</EButton>
      </div>
      <div class="userItem">
        <div>角色：管理员 用户名：admin 密码：111111</div>
        <div>角色：用户 &nbsp&nbsp 用户名：user&nbsp&nbsp 密码：111111</div>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in datalist" :key="index" @click="onclick(item,index)">{{ item.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { setTimeout } from 'timers'
import { setCookies } from 'utils/preference'
import { Button, InputItem, Field, Dialog } from 'mand-mobile'
export default {
  components: {
    [Button.name]: Button,
    [InputItem.name]: InputItem,
    [Field.name]: Field
  },
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
.login-container{
  text-align: center;
  .headerPhoto{
    width: 200px;height: 200px; border-radius: 100px;padding: 0;margin: 100px auto 40px;
  }
  .buttonItem{
    padding: 40px;
  }
  .list ul li{
    line-height: 60px;
  }
}
</style>
