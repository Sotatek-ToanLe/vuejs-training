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
      auth: true,
    },
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),

    meta: {
      auth: true,
    },
  },

  {
    path: '/todo-list',
    name: 'todoList',
    component: TodoList,
    meta: {
      auth: false,
    },
  },
  {
    path: `/detail/:type/:id?`,
    name: 'detail',
    component: DetailTodo,

    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,

    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.auth && !store.state.token) {
    next('login');
  } else {
    next();
  }
});

export default router;
