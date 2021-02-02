import Vue from "vue";
import Vuex from "vuex";
import {getData, login} from '../api'

Vue.use(Vuex)

const m1 = {
    state: () => ({
        msg: ""
    }),
    actions: {
        async getData({commit}) {
            const {msg} = await getData()
            commit('getData', msg)
        }
    },
    mutations: {
        getData(state, payload) {
            state.msg = payload
        }
    },
    getters: {},
    namespaced: true,
}

const m2 = {
    state: () => ({
        user: {}
    }),
    actions: {
        async login({commit}, {email, password}) {
            const {status, user} = await login(email, password)
            if (status === 200) {
                commit('login', user)
                return Promise.resolve("登陆成功")
            } else {
                return Promise.reject('登陆失败')
            }
        }
    },
    mutations: {
        login(state, payload) {
            state.user = payload
        }
    },
    getters: {},
    namespaced: true,
}

const store = new Vuex.Store({
    modules: {
        m1,
        m2
    }
})

export default store
