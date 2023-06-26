import { request } from 'utils/myRequest'

export function ValidateUserByIdentity(identity) {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      username: identity
    }
  })
}
