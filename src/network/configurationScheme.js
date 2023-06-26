import { request }  from "utils/myRequest"

export function getSuggestion(){
    return request({
        url:"/suggestion/find",
        method:'GET'
    });
}