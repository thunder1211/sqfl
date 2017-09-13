// import actions from './actions.js';
// import mutations from './mutations.js';
// import getters from './getters.js';

const state = {
    activeTab: null
}

const getters = {}
const actions = {
    setActiveTab: ({ commit }, tab) => commit('SETACTIVETAB', tab)
}

const mutations = {
    SETACTIVETAB(states, tab) {
        states.activeTab = tab
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}