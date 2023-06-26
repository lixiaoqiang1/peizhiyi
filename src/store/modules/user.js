/*
 * @Author: your name
 * @Date: 2021-12-27 11:35:06
 * @LastEditTime: 2021-12-31 10:58:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editgg
 * @FilePath: \easy-2022-zmMobi\src\store\modules\user.js
 */
import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken, getInfos, setInfos, removeInfos, getClient, setClient } from '@/utils/auth'
const state = {
  token: getToken(),
  type: getInfos('type'),
  username: getInfos('username'),
//   ristnumber: 0,
//   isClient: getClient() // 客户详情 客户个人信息
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_TYPE: (state, type) => {
    state.type = type
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_RISR: (state, ristnumber) => {
    state.ristnumber = ristnumber
  },
  SET_CLIENT: (state, data) => {
    state.isClient = data
    setClient(data)
  }
}
const actions = {

  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        if (data) {
          const { type } = response
          const info = { type: type, username: username }
          commit('SET_TOKEN', data.token)
          commit('SET_TYPE', type)
          commit('SET_USERNAME', username)
          setToken(data.token)
          setInfos(JSON.stringify(info))
          resolve()
        } else {
          const { message } = response
          resolve(message)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_TYPE', '')
        commit('SET_USERNAME', '')
        removeToken()
        removeInfos()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 产品库菜单选中数字
  setrist({ commit }, data) {
    commit('SET_RISR', data)
  },
  // 客户详情 客户个人信息
  setclient({ commit }, data) {
    commit('SET_CLIENT', data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
