import { request }  from "utils/myRequest"

export function getReportInfo(userId,isShare=false){
    return request({
        method:"POST",
        url:`/config/healthy`,
        data:{
            clientId:userId
        }
    },isShare);
}
export function getReportInfoshare(reportId,isShare=false){
    return request({
        method:"GET",
        url:`/config/share/healthy`,
        params:{
            reportId:reportId
        }
    },isShare);
}

export function getTopFiveAssets(clientId,isShare=false){
    return request({
        method:"GET",
        url:`/custom/getCurrentInvest`,
        params:{
            clientId:clientId
        }
    },isShare)
}

export function getPieData(clientId,isShare=false){
    return request({
        method:"GET",
        url:`/custom/getNowCurrentConf`,
        params:{
            clientId:clientId
        }
    },isShare)
}

// ????
export function getTopFiveAssetsshare(reportId,isShare=false){
    return request({
        url:`/custom/share/getFiveProd/` + reportId,
        method:'GET',
        // params:query
    },isShare)
}
// ????
export function getPieDatashare(reportId,isShare=false){
    return request({
        url:`/custom/share/getCurrentConf/`+reportId,
        method:'GET'
    },isShare)
}
// // 分享 share
// export function getPieDatashare(reportId,isShare=false){
//     return request({
//         url:`/custom/share/getCurrentConf?clientId=${reportId}`
//     },isShare)
// }

export function getBarData(clientId,isShare=false){
    return request({
        url:`/custominfo/info/${clientId}`,
        method:'GET',
    },isShare)
}
export function getBarDatashare(confId,isShare=false){
    return request({
        url:`/custominfo/share/info/${confId}`,
        method:'GET',
    },isShare)
}
