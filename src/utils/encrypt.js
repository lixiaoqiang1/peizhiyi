/*
 * @Author: your name
 * @Date: 2021-12-03 18:34:14
 * @LastEditTime: 2022-01-04 09:37:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit.
 * @FilePath: \udesk-mobile-template\src\utils\encrypt.js
 */
import  CryptoJS  from 'crypto-js'
import { Base64 } from 'js-base64'

let keyStr='bankabcdef123456'
let ivStr='abcdef123456bank'
let key = CryptoJS.enc.Utf8.parse(keyStr)
let iv=CryptoJS.enc.Utf8.parse(ivStr)

//AES加密
export function AESEncrypt(word){

    // if(typeof word=="object"){
    //     word=JSON.stringify(word)
    // }
    let srcs=CryptoJS.enc.Utf8.parse(word)
    let encryped = CryptoJS.AES.encrypt(srcs,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        })
        // console.log(typeof(encryped.ciphertext))
    return CryptoJS.enc.Base64.stringify(encryped.ciphertext)
}

//AES解密
export function AESDecrypt(word){
    let base64=CryptoJS.enc.Base64.parse(word);
    let src=CryptoJS.enc.Base64.stringify(base64)

    let decrypt=CryptoJS.AES.decrypt(src,key,{
        iv:iv,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })

    let decryptedStr=decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString();
}