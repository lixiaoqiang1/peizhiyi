/*
 * @Author: your name
 * @Date: 2021-12-29 14:29:12
 * @LastEditTime: 2022-01-04 09:37:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\network\reportView.js
 */
import { request }  from "utils/myRequest"

export function getBaseInfoByClientId(clientId,isShare=false) {
    return request({
        url: `/custominfo/info/${clientId}`,
        method:'GET',
    },isShare);
}

export function getBaseInfoByReportId(ReportId,isShare=false) {
    return request({
        url: `/custom/getById/${ReportId}`,
        method:'GET',
    },isShare);
}

export function getThankDescriptionInfo(isShare=false) {
    return request({
        url: `/suggestion/thank/`,
        method:'GET',
    },isShare);
}

// export function getHealthyDescription(clientId,isShare=false){
//     return request({
//         method:'POST',
//         url:`/config/healthy`,
//         data:{
//             clientId:clientId
//         }
//     },isShare)
// }
// shareåˆ†ä
export function getHealthyDescriptionshare(reportId,isShare=false){
    return request({
        method:'GET',
        url:`/config/share/healthy`,
        params:{
            reportId:reportId
        }
       
    },isShare)
}

export function getTreasureManager(reportId,isShare=false) {
    return request({
        url: `/custominfo/userInfo`,
        method:'GET',
        params:{
            reportId:reportId
        }
    },isShare);
}

export function getShareUrl(reportId,clientId,isShare=false){
    // console.log('rid:',reportId)
    // console.log('cid:',clientId)
    return request({
        url: `/share/create_url`, 
        method:'GET',
        params:{
            assetID:reportId,
            custID:clientId
        }
    },isShare)
}