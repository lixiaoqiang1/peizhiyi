const state = {
  module:"product",
  productList:[]
}
const mutations = {
  setProducts(state,payload){
    state.productList=payload
  }   
}
const actions = {
  setProducts(context,payload){
    context.commit("setProducts",payload)
  }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}