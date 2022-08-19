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
export default store;
