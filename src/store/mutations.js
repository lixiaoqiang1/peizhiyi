/*
 * @Author: your name
 * @Date: 2021-11-30 15:43:34
 * @LastEditTime: 2022-01-04 09:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \udesk-mobile-template\src\store\mutation.js
 */

import { ADD_OR_UPDATE_IMPORTANT_PRODUCT } from './mutation-types'

export default{
    //重点产品
    [ADD_OR_UPDATE_IMPORTANT_PRODUCT](state,payload){
        // console.log('payload:',payload)
        state.importantProductList=payload
        // console.log('state:',state)
    },

    changefinancialObject(state,obj){
        state.financialObject = obj;
    },
    changeselectedItems(state,obj){
        state.selectedItems = obj;
    },

    changeConfigurationplanPage_fresh(state,boo){
        state.configurationplanPage_fresh = boo;
    },

    //风险属性
    changeseletObject(state,obj){
        state.seletObject = obj;
    }, 
    //   客户属性
    changeuserSeletObject(state,obj){
        state.userSeletObject = obj ;

    }, 
}