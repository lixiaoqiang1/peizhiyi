/*
 * @Author: your name
 * @Date: 2021-10-26 15:32:25
 * @LastEditTime: 2022-01-06 09:48:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { getCookies } from 'utils/preference'

import home from '@/views/home'
import IndexView from '@/views/indexView'
import login from '@/views/login'
import loginCode from '@/views/loginCode'
import editAccount from '../views/editAccount'
import choujiang from '@/views/choujiang'

// import jumpPage from '@/views/jumpPage'

// import { ValidateUserByIdentity } from '@/network'

// import { Toast } from 'mint-ui'
import mintRouters from './mintRouter'
import indexMores from './indexMore'

// const clientAdmin = () => import('views/clientAdmin')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/UIList',
    name: 'UIList',
    component: IndexView,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'loginCode',
    component: loginCode,
    meta: {
      title: 'code登录'
    }
  },
  {
    path: '/loginCode',
    name: 'loginCode',
    component: loginCode,
    meta: {
      title: 'code登录'
    }
  },
  {
    path: '/editAccount',
    name: 'editAccount',
    component: editAccount,
    meta: {
      title: '修改手机号'
    }
  },
  {
    path: '/choujiang',
    name: 'choujiang',
    component: choujiang,
    meta: {
      title: '抽奖'
    }
  },
  // {
  //   path: '/jumpPage',
  //   name: 'jumpPage',
  //   component: jumpPage,
  //   meta: {
  //     title: 'h5跳小程序'
  //   }
  // },
  ...mintRouters,
  ...indexMores
]

const router = new VueRouter({
  routes,
  // mode:'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  if (getCookies('Admin-Token')) {
    next()
  } else {
    if (to.path === '/login' || to.path === '/editAccount' || to.path === '/loginCode') {
      next()
    } else {
      next()
      // next({ path: '/login' })
    }
  }
})
export default router
