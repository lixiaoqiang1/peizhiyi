import CrypotJS from 'crypto-js'

let keyStr='abcdefgabcdefg12'

//AES加密
export function encrypt(word){
    keyStr=keyStr?keyStr:'abcdefgabcdefg12';
    let key=CrypotJS.enc.Utf8.parse(keyStr);
    let srcs=CrypotJS.enc.Utf8.parse(word);
    let encrypted=CrypotJS.AES.encrypt(srcs,key,{mode:CrypotJS.mode.ECB,padding:CryptoJS.pad.Pkcs7})
    return encrypted.toString();
}

//AES解密
export function decrypt(word){
    keyStr=keyStr?keyStr:'abcdefgabcdefg12';
    let key=CrypotJS.enc.Utf8.parse(keyStr);
    let decrypt= CrypotJS.AES.decrypt(word,key,{mode:CrypotJS.mode.ECB,padding:CryptoJS.pad.Pkcs7})
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}