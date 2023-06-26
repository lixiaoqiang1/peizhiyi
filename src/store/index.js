/*
 * @Author: your name
 * @Date: 2021-11-15 09:17:55
 * @LastEditTime: 2021-11-30 15:44:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import user from './modules/user'
import indexNav from './modules/indexNav'
import importantProduct from './modules/importantProduct'
import state from "./state"
import mutations from "./mutations"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    indexNav,
    importantProduct,
  },
 
  state,
  mutations,
  actions,
  getters,
})

export default store