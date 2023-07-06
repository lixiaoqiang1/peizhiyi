<template>
  <div class="md-example-child md-example-child-captcha">
    <!-- <md-field title="文案">
      <md-input-item
        v-model="title"
        title="标题"
      />
      <md-input-item
        v-model="content"
        title="插槽内容"
      />
      <md-input-item
        title="短信验证码"
        value="1234"
        readonly
      />
    </md-field> -->

    <!-- <md-field title="配置"> -->

    <!-- <md-field-item
        title="限制验证码长度"
        customized
        align="right"
      >
        <md-switch v-model="limit" />
      </md-field-item>

      <md-input-item
        v-model="maxlength"
        title="验证码长度"
        type="tel"
      />

      <md-field-item
        title="采用掩码"
        customized
        align="right"
      >
        <md-switch v-model="mask" />
      </md-field-item>

      <md-field-item
        title="使用系统键盘"
        customized
        align="right"
      >
        <md-switch v-model="system" />
      </md-field-item>

    </md-field> -->
    <a @click="next">获取验证 </a>

    <md-captcha
      ref="captcha"
      v-model="show"
      :title="title"
      :maxlength="limit ? parseFloat(maxlength) : -1"
      :system="system"
      :mask="mask"
      :append-to="appendTo"
      @submit="submit"
      @show="onShow"
      @hide="onHide"
      @send="onSend"
    >
      {{ content }}
    </md-captcha>
  </div>
</template>

<script>
import { Button, Toast, Captcha, InputItem, Field, FieldItem, Switch } from 'mand-mobile'

export default {
  name: 'CaptchaDemo',
  /* DELETE */
  title: '自定义',
  titleEnUS: 'Customize',
  height: 650,
  /* DELETE */
  components: {
    [Button.name]: Button,
    [Captcha.name]: Captcha,
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [Switch.name]: Switch
  },
  data() {
    return {
      show: false,
      appendTo: document.querySelector('.doc-demo-box-priview') || document.body,
      title: '输入验证码',
      content: '验证码已发送至 186****5407',
      limit: true,
      maxlength: '4',
      mask: false,
      system: false
    }
  },
  methods: {
    next() {
      this.show = true
    },
    submit(val) {
      const max = parseFloat(this.maxlength)
      setTimeout(() => {
        if (!this.limit || max < 0 || val.length === max) {
          if (val !== '1234') {
            this.$refs.captcha.setError('验证码错误，请重新输入')
          } else {
            this.show = false
            Toast({
              content: `你输入了${val}`
            })
          }
        }
      }, 300)
    },
    onSend() {
      console.log('click resend button.')
    },
    onShow() {},
    onHide() {}
  }
}

</script>

  <style lang="stylus">
  .md-example-child-captcha
    .md-field
      margin-bottom 40px
  </style>

