import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoList from '@/pages/TodoList.vue';
import LoginPage from '@/pages/Login.vue';
import DetailTodo from '@/pages/DetailTodo.vue';

import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

    meta: {
      auth: false,
      layout: 'CommonTemplate',
    },
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),

    meta: {
      auth: false,
      layout: 'CommonTemplate',
    },
  },

  {
    path: '/todo-list',
    name: 'todoList',
    component: TodoList,
    meta: {
      auth: true,
      layout: 'LayoutTemplate',
    },
  },
  {
    path: `/detail/:type/:id?`,
    name: 'detail',
    component: DetailTodo,

    meta: {
      auth: false,
      layout: 'LayoutTemplate',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,

    meta: {
      auth: false,
      layout: 'DefaultTemplate',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth && !store.state.token) {
    next('login');
  } else {
    next();
  }
});

export default router;
