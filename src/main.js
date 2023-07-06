// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../mock' // 模拟数据请求
import 'mint-ui/src/assets/font/iconfont.css'
import '@/styles/base.scss'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'mand-mobile/lib/mand-mobile.css'
// import 'vant/lib/index.less'
import Echarts from 'echarts'
import './cube-ui' // 按需引用cube-ui
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter' // 引入axios-mock-adapter插件，模拟请求时的服务端错误：403/500
import '@/utils/rem-flexible' // rem 根字号全局设置
import '@/styles/mobileBank/index.scss' // 引入个人掌银样式定义
// import '@udesk/mbank-ui/lib/style/index.css' // 引入udesk样式
import Vconsole from 'vconsole'
Vue.prototype.$echarts = Echarts
Vue.prototype.$axios = Axios
Vue.prototype.$axios.options.emulateJSON = true

export default new Vconsole()

import EButton from '@/components/EButton' // 引入个人掌银样式定义
import EHeader from '@/components/EHeader' // 引入个人掌银样式定义

// 以下配合axios-mock-adapter实现请求服务端错误
var newAxios = Axios.create({
  baseURL: 'http://localhost:8080/'
})
Vue.prototype.$newAxios = newAxios
const mock = new MockAdapter(newAxios) // end of newAxios
Vue.use(Vant)
Vue.use(MintUI)
Vue.config.productionTip = false

Vue.component('EButton', EButton)
Vue.component('EHeader', EHeader)

// 使用插件模拟三种服务端状态：200/403/500
mock.onAny('/users500').reply(500, {
  users: [
    { id: 1, name: 'abc' }
  ]
})
mock.onAny('/users403').reply(403, {
  users: [
    { id: 1, name: 'abc' }
  ]
})
mock.onPut('/usersputsuccess').reply(200, {
  users: [
    { id: 200, name: 'putsuccess' }
  ]
})
Vue.config.ignoredElements = ['wx-open-launch-weapp']
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})
