import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const InfoKey = 'Admin-Info'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setInfos(info){
    return Cookies.set(InfoKey,info)
}
export function getInfos(info){
  const infos = Cookies.get(InfoKey)
  if(infos){
    return JSON.parse(infos)[info]
  }else{
    return ''
  }
}
export function removeInfos() {
    return Cookies.remove(InfoKey)
}
// 请求客户详情 客户个人信息
export function getClient() {
  return localStorage.getItem('isClient')
}

// 保存客户详情 客户个人信息
export function setClient(data) {
  return localStorage.setItem('isClient', JSON.stringify(data))
}