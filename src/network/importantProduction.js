import { request } from 'utils/myRequest'

export function getImportantProductDatas(pageIndex, pageSize, prodType, prodInfoType) {
  return request({
    url: `important/classify?current=${pageIndex}&size=${pageSize}&prodType=${prodType}&prodInfoType=${prodInfoType}`,
    method: 'GET',
    params: {
      current: pageIndex,
      size: pageSize,
      prodType: prodType,
      prodInfoType: prodInfoType
    }
  })
}

export function getPreciousMetalList() {
  return request({
    url: `/gold/infoList`,
    method: 'GET'
  })
}

export function getPreciousMetalById(productId) {
  return request({
    url: `/gold/info`,
    method: 'GET',
    params: { prodCode: productId }
  })
}

// 查询 /zcpz
export function getsearch(query) {
  return request({
    url: '/important/searchList',
    method: 'GET',
    params: query
  })
}
// 私行产品详情
export function getpersonalDetail(query) {
  return request({
    url: '/important/searchList',
    method: 'GET',
    params: query
  })
}