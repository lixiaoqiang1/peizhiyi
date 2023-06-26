import { request }  from "utils/myRequest"

export function sendValidateCode(clientId){
    return request({
        method:'GET',
        url:`/message/send/${clientId}`,
    });
}

export function validate(data){
    // console.log(`code:${code}msg:${msgphone}`)
    return request({
        url:"/message/check",
        method:"POST",
        data
    })
}
// 短信验证码-通过id获取客户手机号
export function msgPhone(clientId){
    return request({
        url:`/message/getPhone/${clientId}`,
        method:"POST",
    })
}