import axios from 'axios'

export default {
    namespaced: true,

    // initial state
    state: {
        authenticated: false,
        user: {},
        authority: [],
        redirectTo: null,
        error: null
    },

    // getters
    getters: {
        authenticated(state) {
            return state.authenticated
        },

        user(state) {
            return state.user
        },

        authority(state) {
            return state.authority
        },

        redirectTo(state) {
            return state.redirectTo
        },

        error(state) {
            return state.error
        },
    },

    // mutations
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },

        SET_USER(state, value) {
            state.user = value
        },

        SET_AUTHORITY(state, value) {
            state.authority = value
        },

        SET_REDIRECT_TO(state, value) {
            state.redirectTo = value
        },

        SET_ERROR(state, value) {
            state.error = value;
        }
    },

    // actions
    actions: {
        async handleLogin({ dispatch, commit, state }, credentials) {
            await axios.post('/api/login', credentials).then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data.user)
                commit('SET_ERROR', {'message': response.data.message})
                commit('SET_REDIRECT_TO', response.data.redirect_to)
            }).catch((error) => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', {})
                commit('SET_REDIRECT_TO', null)
                commit('SET_ERROR', error.response.data)
            })
            // @return data from route
            // return dispatch('checkAuth')
        },
        
        async handleLogout({ dispatch }) {
            await axios.post('/api/logout')
            return dispatch('checkAuth')
        },
        checkAuth({ commit }) {
            // force axios.get to execute (sync) so we add the return stmt.
            return axios.get('/api/auth').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data.user)
                commit('SET_REDIRECT_TO', response.data.redirect_to)
                commit('SET_ERROR', null)
            }).catch((error) => { 
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
                commit('SET_REDIRECT_TO', null)
                commit('SET_ERROR', error.response.data)
            })
        },
        getAuthority({ commit }) {
            return axios.get('/api/auth/authority').then((response) => {
                commit('SET_AUTHORITY', response.data)
            })
        }
    }
}