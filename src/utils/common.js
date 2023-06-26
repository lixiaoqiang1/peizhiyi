import { Toast } from "vant";

/*
 * @Author: your name
 * @Date: 2021-11-12 11:55:59
 * @LastEditTime: 2021-11-12 11:57:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\utils\common.js
 */
export default{
    formatName(name,sex){
        let sexDesc=sex>0?'先生':'女士'
        let newStr;
        if(name.length===2){
          newStr=name.substr(0,1)+'*';
        }else if(name.length>2){
          let char='';
          for(let i=0,len=name.length-2;i<len;i++){
            char+='*';
          }
          newStr=name.substr(0,1)+char+name.substr(-1,1);
        }else{
          newStr=name;
        }
        newStr+=sexDesc;
        return newStr
      },
      
}
// ???
export function toast(message){
  Toast.loading({
    message: message,
    duration: 0, 
    forbidClick: true
  })
}
//????
export function Tclear(){
  Tclear()
}

export function onfontSize(res){
  let clientWidth = window.innerWidth||documentElement.clientWidth||document.body.clientWidth;
  // console.log(clientWidth)
  if(clientWidth > 750){
      res = res * 2
  }
  // if(clientWidth) return;
  // let fontSize = clientWidth/750*32
  return res
}