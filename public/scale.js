/*
 * @Author: your name
 * @Date: 2022-01-14 09:11:52
 * @LastEditTime: 2022-01-14 09:15:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile\public\scale.js
 */
window.onload = function(){
    document.addEventListener('touchstart',function(event){
        if(event.touches.length > 1){
            event.preventDefault();

        }
        
    })
    document.addEventListener('gesturestart',function(event){
        event.preventDefault();
    })

    
}