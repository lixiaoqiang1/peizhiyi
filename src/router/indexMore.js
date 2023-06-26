// 二级列表页面路由
import ListMyComponents from '@/views/listMyComponents'
import IndexSearch from '@/views/indexSearch'
import IndexNotice from '@/views/indexNotice'

const routes = [
  {
    path: '/listMyComponents',
    name: '更多UDesk组件',
    component: ListMyComponents,
    img: 'List_myComponents',
    image: 'index_more'
  },
  {
    path: '/indexSearch',
    name: 'IndexSearch',
    component: IndexSearch
  },
  {
    path: '/indexNotice',
    name: 'IndexNotice',
    component: IndexNotice
  }
]
export default routes
