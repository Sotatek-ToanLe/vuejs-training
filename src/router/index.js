import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoList from '@/components/TodoList.vue';
import DetailTodo from '@/components/DetailTodo.vue';
import LoginPage from '@/components/Login.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

    meta: {
      auth: false,
    },
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),

    meta: {
      auth: false,
    },
  },

  {
    path: '/todo-list',
    name: 'todoList',
    component: TodoList,
    meta: {
      auth: true,
    },
  },
  {
    path: `/detail/:type/:id?`,
    name: 'detail',
    component: DetailTodo,

    meta: {
      auth: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,

    meta: {
      auth: false,
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
