/*
 * @Author: your name
 * @Date: 2021-12-29 14:29:12
 * @LastEditTime: 2022-01-11 11:46:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\network\clientAdmin.js
 */
import { request }  from "utils/myRequest"


export function getPaggingClientAdmin(data){
    return request({
        url:"/custominfo/findManger",
        method:"POST",
        data
    });
}

export function getPaggingAssistantUser(data){
     return request({
        url:"/custominfo/findAsCount",
        method:"POST",
        data
    });
}

export function searchClientAdmin(data){
    return request({
        url:"/custominfo/loadByIdONameM",
        method:"POST",
        data
    })
}

export function searchgAssistantUser(data){
    return request({
        url:"/custominfo/loadByIdONameA",
        method:"POST",
        data
    })
}

//插入客户信息
export function custominfoInsert(data){
    return request({
        url:"/custominfo/insert",
        method:"POST",
        data:data,
    });
}
