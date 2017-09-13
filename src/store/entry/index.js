const state = {
    active_navName: ''
}

const getters = {}
const actions = {
    setActive_navName: ({ commit }, navname) => commit('SETACTIVE_NAVNAME', navname)
}

const mutations = {
    SETACTIVE_NAVNAME(states, navname) {
        debugger
        states.active_navName = navname
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}