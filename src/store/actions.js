import { ADD_OR_UPDATE_IMPORTANT_PRODUCT } from './mutation-types'

export default{
    addOrUpdateImportantProduct(context,payload){
        context.commit('addOrUpdateImportantProduct',payload)
    }
}