/*
 * @Author: your name
 * @Date: 2021-12-30 11:28:15
 * @LastEditTime: 2022-01-10 09:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\network\eventMarketing.js
 */
import { request }  from "utils/myRequest"
//消息中心-精准事件最新时间
export function lastTimeuserAccount(userid) {
    return request({
        url: `/event/lastTime`,
        method:'GET',
        params:{userAccount:userid}
    })
}


//事件营销-精准事件未读数量
export function getMsgNumber(userid) {
    return request({
        url: `/event/rows/unread`,
        method:'GET',
        params:{userAccount:userid}
    })
}


//事件营销-精准事件分页查询
export function EventListUserAccount(obj) {
    return request({
        url: `/event/eventList`,
        method:'GET',
        params:{
            userAccount:obj.userAccount,
            current:obj.current,
            size:8,
        }
    })
}
