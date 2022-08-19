import Vue from 'vue';
import Vuex from 'vuex';
import { getTodo, deleteTodo, addTodo } from '@/api/index';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    token: false,
    todolist: [],
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    setToken(state) {
      state.token = true;
    },
    logout(state) {
      state.token = false;
    },

    getListTodo(state, payload) {
      state.todolist = payload;
    },
  },
  actions: {
    async getTodoList({ commit }) {
      const res = await getTodo();
      commit('getListTodo', res);
    },
    async deleteTodo({ commit }, payload) {
      await deleteTodo(payload);
      commit('deleteTodo', payload);
    },
    async addTodo({ commit }, payload) {
      await addTodo(payload);
      commit('addTodo', payload);
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});
export default store;
