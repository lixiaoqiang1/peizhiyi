
const tokens = {
    admin: {
      token: 'admin-token'
    },
    user: {
      token: 'user-token'
    }
  }
  
const passwords = {
    admin: '111111',
    user: '111111'
}

const users = {
    admin:'admin',
    user:'user'
}
  
  export default [
    // user login
    {
      url: '/user/login',
      type: 'post',
      response: config => {
        const { username, password } = config.body
        const token = tokens[username]
        const type = users[username]
        const userPassword = passwords[username]
        // mock error
        if (!token || password !== userPassword) {
          return {
            code: 60204,
            title: '登录失败',
            message: '账户或密码不正确.',
            success: true
          }
        }
  
        return {
          code: 20000,
          title: '登录成功',
          data: token,
          type:type,
          success: true,
          message: '成功',
          detail: '成功请求的详情--20000---login successed.'
        }
      }
    },
  
    // get user info
    {
      url: '/user/info\.*',
      type: 'get',
      response: config => {
        const { token } = config.query
        const info = users[token]
  
        // mock error
        if (!info) {
          return {
            code: 50008,
            title: '请求失败',
            data: '',
            message: 'Login failed, unable to get user details.',
            success: false,
            detail: '失败请求的详情--50008---Login failed, unable to get user details.'
          }
        }
  
        return {
          code: 20000,
          title: '请求成功',
          data: info,
          success: true,
          message: '成功',
          detail: '成功请求的详情--20000---get info successed.'
        }
      }
    },
  
    // user logout
    {
      url: '/user/logout',
      type: 'post',
      response: _ => {
        return {
          code: 20000,
          title: '退出登录成功',
          data: 'success',
          success: true,
          message: '成功',
          detail: '成功请求的详情--20000---logout successed.'
        }
      }
    }
  ]
  