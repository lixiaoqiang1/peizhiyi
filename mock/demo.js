import Mock from 'mockjs'

const IndexNotifyData = Mock.mock({
  'data': {
    tabs:[
        {name: '通知1', id: 1},
        {name: '通知2', id: 2},
        {name: '通知3', id: 3},
    ],
    notice:[
      [
          {title: '通知11', name: 'a', value: '内容'},
          {title: '通知12', name: 'b', value: '内容'},
          {title: '通知13', name: 'c', value: '内容'},
          {title: '通知14', name: 'd', value: '内容'},
          {title: '通知15', name: 'e', value: '内容'}
      ],
      [
          {title: '通知21', name: 'a', value: '内容'},
          {title: '通知22', name: 'b', value: '内容'},
          {title: '通知23', name: 'c', value: '内容'},
          {title: '通知24', name: 'd', value: '内容'},
          {title: '通知25', name: 'e', value: '内容'}
      ],
      [
          {title: '通知31', name: 'a', value: '内容'},
          {title: '通知32', name: 'b', value: '内容'},
          {title: '通知33', name: 'c', value: '内容'},
          {title: '通知34', name: 'd', value: '内容'},
          {title: '通知35', name: 'e', value: '内容'}
      ]
    ]
  }
})


export default [
  {
    url: '/getfontsize/info',
    type: 'get',
    response: () => {
          return {
            code: 20000,
            data: fontSize,
            success: true,
            message: '成功',
            detail: '成功请求的详情--20000--successed.'
          }
      
    }
  },
  {
    url: '/savefontsize/info',
    type: 'post',
    response: () => {
          return {
            code: 20000,
            data: 'success',
            success: true,
            message: '成功',
            detail: '成功请求的详情--20000--successed.'
          }
      
    }
  },
  {
    url: '/savebgcolor/data',
    type: 'post',
    response: (config) => {
          return {
            code: 20000,
            data: config.body,
            success: true,
            message: '成功',
            detail: '主题颜色存储'
          }
      
    }
  },
  {
    url: '/getbgcolor/data',
    type: 'get',
    response: () => {
          return {
            code: 20000,
            data: {
              bgColor:'#ffffff'
            },
            success: true,
            message: '成功',
            detail: '主题颜色请求'
          }
      
    }
  },
  {
    url: '/getIndexNotify/data',
    type: 'get',
    response: () => {
          return {
            code: 20000,
            data: IndexNotifyData,
            success: true,
            message: '成功',
            detail: '成功请求的详情--20000--successed.'
          }
      
    }
  }
]