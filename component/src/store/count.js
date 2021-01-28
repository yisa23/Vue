export default {
  state: () => ({
    count: 1,
  }),
  actions: {
    incrementIfOdd({ commit, state }, payload) {
      if (state.count % 2 === 1) {
        commit("increment", payload);
      }
    },
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit("increment", payload);
      }, 1000);
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
    decrement(state, payload) {
      state.count -= payload.amount;
    },
  },
  getters: {
    evenOrOdd(state) {
      return state.count % 2 === 0 ? "偶数" : "奇数";
    },
  },
  namespaced: true,
};
