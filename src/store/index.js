import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import entry from './entry';
import page1 from './page1';

export default new Vuex.Store({
    modules: {
        entry,
        page1
    }
});