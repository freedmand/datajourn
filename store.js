import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searching: false,
    query: '',
  },
  mutations: {
    setSearch(state, searching) {
      state.searching = searching;
    },
    clearSearch(state) {
      state.searching = false;
      state.query = '';
    },
    setQuery(state, query) {
      state.query = query;
    },
  },
});
