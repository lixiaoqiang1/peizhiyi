<template>
  <div>
    <mt-header title="这是一个移动端页面标题">
      <mt-button slot="left" icon="back" @click="btn" />
      <router-link slot="right" to="/login">登录</router-link>
    </mt-header>

    <mt-field
      v-model="username"
      type="number"
      :attr="{ oninput:'if(value.length>11)value=value.slice(0,11)'}"
      label="账号"
      placeholder="请输入账号"
      @focus="focus"
    />

    <mt-field
      v-model="password"
      type="number"
      label="密码"
      placeholder="请输入密码"
      :state="passwordState"
    />

    <mt-field
      v-model="passwordCopy"
      type="password"
      label="确认密码"
      placeholder="请输入密码"
      :state="passwordState"
    />
    <div class="input-group">
      <input v-model="ceshi1" type="text">
      <!-- <input
        v-model="ceshi2"
        onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
        maxlength="10"
        show-word-limit
        clearable
      > -->
      <span>手机号:</span>
      <input
        v-model="ceshi2"
        onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
        oninput="if(value.length>11)value=value.slice(0,11)"
        type="tel"
        placeholder="请输入手机号"
      >
      <span>手机号2:</span>
      <input
        v-model="ceshi3"
        onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
        oninput="if(value.length>11)value=value.slice(0,11)"
        type="number"
        placeholder="请输入手机号"
      >
      <!-- <input v-model="ceshi3" class="form-control" type="number" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"> -->
    </div>
    <div>
      <span>手机号3:</span>
      <input v-model="ceshi3" type="number" oninput="if( this.value.length > 11 )  this.value = this.value.slice(0,11)"></input>
      <mt-button type="primary" size="large" @click="checkFrom">快速注册</mt-button>
    </div>
    <div>
      <span>手机号4:</span>
      <input
        v-model="ceshi3"
        onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
        oninput="if(value.length>11)value=value.slice(0,11)"
        type="number"
        placeholder="请输入手机号"
      >
    </div>
    <span>手机号5:</span>
    <input
      onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
      oninput="if(value.length>11)value=value.slice(0,11)"
      type="number"
      placeholder="请输入手机号"
    >
    <input
      v-model="ceshi3"
      onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
      oninput="if(value.length>11)value=value.slice(0,11)"
      type="number"
      placeholder="请输入手机号"
    >
    <input
      v-model="form.mobile"
      type="number"
      placeholder="请输入手机号"
      @input="oninputaa(11,'mobile')"
    >
    {{ docmHeight }}
    {{ showHeight }}
    <button v-show="hideshow" style="position: fixed;bottom: 10px;">确定</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docmHeight: document.documentElement.clientHeight || document.body.clientHeight,
      showHeight: document.documentElement.clientHeight || document.body.clientHeight,
      hideshow: true,
      usernameState: '',
      password: '',
      passwordCopy: '',
      passwordState: '',
      ceshi1: '',
      ceshi2: '',
      ceshi3: '',
      ceshi4: '',
      form: { mobile: '' }
    }
  },
  watch: {
    showHeight: function() {
      if (this.docmHeight > this.showHeight) {
        // 隐藏
        this.hideshow = false
      } else {
        // 显示
        this.hideshow = true
      }
    }    
  },
  mounted() {
    let aaa = 'qwrtqw'
    console.log(aaa.lastIndexOf('q  '))
    window.onresize = () => {
      return (() => {
        this.showHeight = document.documentElement.clientHeight || document.body.clientHeight
      })()
    }
  },
  beforeDestroy() {
    window.onresize = () => {}
  },
  methods: {
    oninputaa(length, name) {
      setTimeout(() => {
        this.form[`${name}`] = this.form[`${name}`].replace(new RegExp('[^0-9]', 'g'), '')
        this.form[`${name}`] = this.form[`${name}`].slice(0, length)
      }, 10)
    },

    focus() {
      alert('111')
    },
    btn() {
      this.$router.push('/home')
    },
    checkUsername() {
      const reg = /^\w{6,15}$/
      const result = reg.test(this.username)
      if (result == true) {
        this.usernameState = 'success'
        return true
      } else {
        this.usernameState = 'error'
        return false
      }
    },

    checkUserpwd() {
      const reg = /^\w{6}$/
      const result = reg.test(this.password)
      const result2 = reg.test(this.passwordCopy)
      if (
        result == true &&
        this.password == this.passwordCopy &&
        result2 == true
      ) {
        this.passwordState = 'success'
        return true
      } else {
        this.passwordState = 'error'
        return false
      }
    },

    checkFrom() {
      this.checkUsername()
      this.checkUserpwd()
      if (this.checkUsername() == true && this.checkUserpwd() == true) {
        console.log('regist...')
        // 发送http请求,执行注册业务
        this.axios
          .post('/register', `username=${this.username}&password=${this.pwd}`)
          .then(result => {
            console.log(result.data)
            if (result.data.code == 200) {
              this.$toast({
                message: '恭喜注册成功',
                position: 'bottom',
                duration: 5000
              })
              this.$router.push('/login')
            } else if (result.data.code == 201) {
              this.$toast({
                message: '该用户已经注册',
                position: 'bottom',
                duration: 3000
              })
            } else {
              this.$toast({
                message: '服务器异常 请重试',
                position: 'bottom',
                duration: 3000
              })
            }
          })
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >
.input-group{
  input{
    border:1px #ddd solid;line-height: 80px;margin: 5px 0;
  }
}
</style>
