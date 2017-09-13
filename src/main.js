// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './store/index';
import iView from 'iview';
import 'iview/dist/styles/iview.css'
Vue.use(iView)
import './assets/style/style.scss'

import pagewrap from '@/components/blocks/pagewrap'
Vue.component('pagewrap', pagewrap)
import Vuebar from 'vuebar'
Vue.use(Vuebar)

// import "babel-polyfill"; // 解决ie '“Promise”未定义' ** 开发环境报错 ??? **

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // 页面刷新的时候，重定向到首页 - /home
    if (!store.state.entry.active_navName) {
        store.dispatch('setActive_navName', 'home')
        next({ path: '/home' })
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})