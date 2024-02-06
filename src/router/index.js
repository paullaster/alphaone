import { createRouter, createWebHashHistory } from 'vue-router'
import AppVue from '../App.vue';

const routes = [
    { path: '/', redirect: {name: 'landing'}},
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

export default router;