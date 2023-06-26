import { AESEncrypt,AESDecrypt } from '@/utils/encrypt.js'
var baseURL = process.env.VUE_APP_BASE_API;

// 模拟
export function get(url,success,error,timeout,heads={"Content-type":"application/json;charset=UTF-8"}){
    var req = new XMLHttpRequest();
    req.open('GET',url,true);
    req.onload = success
    req.timeout = timeout
    for(var key in heads){
        req.setRequestHeader(key,heads[key])
    }
    req.onerror = error
    req.send();
    return req
}

// 模拟
export function post(url,data,success,error,timeout,heads={"Content-type":"application/json;charset=UTF-8"}){
    var req = new XMLHttpRequest();
    req.open('POST',url,true);
    req.onload = success
    // req.timeout = timeout
    for(var key in heads){
        req.setRequestHeader(key,heads[key])
    }
    req.onerror = error
    req.send(data);
    return req
}
// 对象拼接到url
export function urlSplicing(url,obj){
    if(JSON.stringify(obj)!=='{}'){
        if(url.indexOf('?')==-1){
            url+='?'
        }
        Object.keys(obj).map((key)=>{
            url += key + '=' + obj[key] + '&';
        })
        url = url.slice(0,url.length-1)
        return url
    }else{
        return ''
    }
}
// 判断获取哪个token
export function gettoken(isShare){
    let str;
    if(isShare){
        str = localStorage.getItem("shareToken");
    }else{
        str = aixosIntoken;
    } 
    return str
}
export class Requset {
    constructor(setting,isShare){
        this.setting = setting
        this.requsetHandler = []
        this.responseHandler = []

        this.url = setting.url
        this.method = setting.method || 'GET'
        this.data = setting.data || ''
        // this.timeout = 5000
        this.heads = setting.heads || {}

        this.heads['Content-type'] = 'application/json;charset=UTF-8'
        this.heads['Authorization'] = gettoken(isShare)

        //get 添加 params
        if(setting.params !== undefined){
            setting.params['token'] = gettoken(isShare)
            this.url = urlSplicing(setting.url,setting.params)
        }
        else if((this.method == 'GET' || this.method == 'get') && setting.params === undefined){
            setting.params = {'token': gettoken(isShare)}
            this.url = urlSplicing(setting.url,setting.params)
        }
    }

    addRequsetHandler(func) {
        this.requsetHandler.push(func)
    }
    
    addResponseHandler(func){
        this.responseHandler.push(func)
    }
    
    send(setting,isShare){
        for(var handler of this.requsetHandler){
            handler(this)
        }
        var ret_promise;
        var url = baseURL + this.url;
        var data = JSON.stringify({ data:AESEncrypt(JSON.stringify(this.data)),token: gettoken(isShare) })
        var timeout = this.timeout;
        var heads = this.heads;
        var type = this.method;
        var responseHandler = this.responseHandler;
        if(this.method == 'GET' || this.method == 'get'){
            ret_promise = new Promise(function(resolve,reject){
                // mmspc.nativeRequest.get(url,success,error,data ,type);
                get(
                    url,
                    function(req){
                        var res = new Response(req.currentTarget)
                        for(handler of responseHandler){
                            handler(res)
                        }
                        resolve(res.data)
                    },
                    function(req){
                        reject(req)
                    },
                    // timeout,heads,
                    // type
                )
            })
        }else{
            ret_promise = new Promise(function(resolve,reject){
                // mmspc.nativeRequest.post(base+url,data,type,this.sucessWrapper(success,error),error);
                post(
                    url,
                    data,
                    // type,
                    function(req){
                        var res = new Response(req.currentTarget)
                        for(handler of responseHandler){
                            handler(res)
                        }
                        resolve(res.data)
                    },
                    function(req){
                        reject(req)
                    },
                    // timeout,heads,
                )
            })
        }
        return ret_promise
    }
}

export class Response{
    constructor(xmlHttpRequest){
        this.url = xmlHttpRequest.responseURL
        this.data = xmlHttpRequest.response
        this.status = xmlHttpRequest.status
    }
}

export function request(setting,isShare=false){
    var req = new Requset(setting,isShare)
    req.addRequsetHandler(function(requset){
        requset.url = requset.url
        // requset.url = requset.url + '/abc'
    })
    req.addResponseHandler(function(response){
        console.log('response------')
        console.log(response)
        response.data = JSON.parse(AESDecrypt(response.data))
    })
    return req.send(setting,isShare)
}

// (function(){
//     request({
//         url:"http://127.0.0.1:3000/hello",
//         method:"GET"
//     }).then(function(res){
//         console.log(res)
//     })
// })
