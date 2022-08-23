import Vue from 'vue';
import Vuex from 'vuex';
import { getTodo, deleteTodo, addTodo } from '@/api/index';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    token: false,
    todolist: [],
    stepLine: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
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
    changeStep(state, payload) {
      if (payload.type === 'step1') {
        state.stepLine.step1 = payload.value;
      } else if (payload.type === 'step2') {
        state.stepLine.step2 = payload.value;
      } else if (payload.type === 'step3') {
        state.stepLine.step3 = payload.value;
      } else {
        state.stepLine.step4 = payload.value;
      }
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
    changeStep(context, payload) {
      context.commit('changeStep', payload);
      console.log('payload:', payload);
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});
export default store;
