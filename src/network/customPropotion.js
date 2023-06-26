import { request }  from "utils/myRequest"

export function getSuggestionPercentage(ReportId){
    return request({
        url:`/custom/selfConf/${ReportId}`,
        method:'GET',
    });
}

export function updatePercentage(data){
    return request({
        url:`/custom/updateSelfConf`,
        method:'POST',
        data
    })
}