/*
 * @Author: your name
 * @Date: 2021-12-29 14:29:12
 * @LastEditTime: 2022-01-04 09:36:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\network\configurationSuggestion.js
 */
import { request }  from "utils/myRequest"

export function getConfigurationSuggestion(clientId='123456',isShare=false){
    return request({
        url:`/view/findLatest`,
        method:'GET',
        params:{
            clientId:clientId
        }
    },isShare);
}

export function getCardDescription(isShare=false){
    return request({
        url:`/assetnote/findAll`,
        method:'GET'
    },isShare)
}

export function getConfigurationSuggestionBarData(reportId){
    // console.log('reportId:',reportId)
    return request({
        url:`/custom/getById/${reportId}`,
        method:'GET'
    })
}