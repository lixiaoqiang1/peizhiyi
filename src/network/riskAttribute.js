/*
 * @Author: your name
 * @Date: 2021-11-11 09:06:10
 * @LastEditTime: 2021-12-28 11:26:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\network\riskAttribute.js
 */
import { request } from "utils/myRequest"



export function getAllRiskAttributes() {
    return request({
        url: "/risklabel/findAll",
        method:'GET',
    });
}

//风险属性请求接口
export function getRiskAttributesData() {
    return request({
        url: "/risklabel/findAll",
        method:'GET',
    })
}
//客户属性请求接口
export function getCustomerPropertData() {
    return request({
        url: "/attributedetail/findAll",
        method:'GET',
    })
}

//客户理财目标请求接口
export function getCustomerFinancialGoalData() {
    return request({
        url: "/customgoal/findAll",
        method:'GET',
    })
}

//客户详情页请求接口1

export function getCustomerDetailsData(id) {
    return request({
        url: "/custominfo/info/" + id,
        method:'GET',
    })
}
// 删除规划 
export function customDelete(data){
    return request({
        url:"/custom/delete?id="+ data.id,
        method:"POST"
    })
}
//客户详情理财目标请求接口
export function getCustomerDetailsGoal(id) {
    return request({
        url: "/custominfo/info/" + id,
        method:'GET',
    })
}

//当前资产配置方案页请求接口 根据筛选出来的客户选中id请求数据
export function getCurrentAssetsData(prodCodes, id) {
    return request({
        url: "/important/detailList",
        method:'GET',
        params:{
            "prodCodes":prodCodes,
            "id":id
        }
    })
}

//风险属性向后台发送客户选中项请求
export function riskAttributeSentData(data) {
    return request({
        url: "/custominfo/addRiskLabel",
        method: 'post',
        data
    })
}

//客户属性向后台发送请求接口

export function attributeSentData(resArr, clientId) {
    return request({
        url: "/custominfo/addAttribute",
        method: 'post',
        data: {
            attrList: resArr,
            "entity": { "clientId": clientId }
        }
    })
}
// 客户理财目标新增接口
export function customGoalAdd(resArr, configReport,target,clientId) {
    return request({
        url: "/custom/insert",
        method: 'post',
        data: {
            goalList: resArr,
            "entity": { "configReport": configReport ,"target": target,"clientId":clientId }
        }
    })
}
// 客户详情请求接口 理财配置方案列表
export function getcustominfoData(clientid) {
    return request({
        url: "/custominfo/findConfList/" + clientid,
        method:'GET',
    })
}

//当前资产配置方案页面头部内容请求接口
export function getCurrentHeaderData() {
    return request({
        url: "/suggestion/find" ,
        method:'GET',
    })
}

//当前资产配置方案页面获取客户理财目标页存储数据接口
export function getCustomerGoalData(id) {
    return request({
        url: "/custom/getById/" + id,
        method:'GET',
    })
}

//生成配置报告插入接口请求
export function genneratingConfigurationData(data) {
    return request({
        url: "/presentconf/insert",
        method:'post',
        data:data
    })
}



//生成配置报告页面接口
export function getcustomDetailData(id,isShare) {
    return request({
        url: "/presentconf/getConfDetail",
        method:'GET',
        params:{
            id:id
        }
    },isShare)
}
// //生成配置报告页面接口 share
// export function getcustomDetailDatashare(id,isShare) {
//     return request({
//         url: "/presentconf/share/getConfDetail?id=" +id,
//     },isShare)
// }


// export function getLogDetailByLogId(id){
//     return request({
//         url:"/logs/logDetail",
//         params:{
//             id:id
//         }
//     });
// }