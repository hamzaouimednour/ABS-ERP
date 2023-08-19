import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    state: {},
    mutations:{},
    modules: {
        auth
    },
    actions:{},
    strict: debug,
})

export default store;