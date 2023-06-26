/*
 * @Author: your name
 * @Date: 2021-12-27 11:35:06
 * @LastEditTime: 2021-12-30 16:11:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easy-2022-zmMobi\src\network\logList.js
 */
import { request }  from "utils/myRequest"

export function getLogListByClientId( current,userId){
    return request({
        url:`/logs/userLogsList`,
        method:'GET',
        params:{
            current:current,
            userId:userId,
            size:5,
        }
    });
}


//新增日志
export function LogsInsert(logObj){
    return request({
        url:`/logs/insert`,
        method:"POST",
        data:logObj
    
    });
}

//获取用户某个客户所有营销日志
export function LogsCustLogsList(current,clientId){
    return request({
        url:`/logs/custLogsList`,
        method:'GET',
        params:{
            current:current,
            clientId:clientId,
            size:15,
        }
    });
}






