// import { WxRequest } from './request'
import { WxRequest } from '@/utils/myRequest'
export function getWxOpenidAndToken(appid, secret, code) {
  return WxRequest({
    method: 'GET',
    url: '/sns/oauth2/access_token?appid=' + appid + '&secret=' + secret + '&code=' + code + '&grant_type=authorization_code'
  })
}

export function getWxUserMessage(access_token, openid) {
  return WxRequest({
    method: 'GET',
    url: '/sns/userinfo?access_token=' + access_token + '&openid=' + openid + '&lang=zh_CN'
  })
}
