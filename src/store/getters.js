const getters = {
  token: state => state.user.token,
  type: state => state.user.type,
  username: state => state.user.username,
  selected: state => state.indexNav.selected
//     // productList:state=>state.productList,
//     importantProductList:state=>state.importatnProductList
}
export default getters

// import state from "./state"

// export default {
//   importantProductList(state){
//     // console.log('ssssstate:',state)
//     return state.importantProductList
//   }
// }
