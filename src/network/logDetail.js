import { request }  from "utils/myRequest"

export function getLogDetailByLogId(id){
    return request({
        url:"/logs/logDetail",
        method:'GET',
        params:{
            id:id
        }
    });
}