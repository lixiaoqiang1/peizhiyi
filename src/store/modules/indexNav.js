const state = {
    selected: '首页'
}
const mutations = {
    SET_SELECTED: (state, id) => {
        state.selected = id
      }
}
const actions = {
    // handle nav
    handleClick({ commit }, id) {
        commit('SET_SELECTED', id)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}