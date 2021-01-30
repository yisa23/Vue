import Vue from "vue";
import Vuex from "vuex";
import {getData} from '../api'

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

const store = new Vuex.Store({
    modules: {
        m1
    }
})

export default store
