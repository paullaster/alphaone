import { createRouter, createWebHashHistory } from 'vue-router'
import AppVue from '../App.vue';

const routes = [
    { path: '/', component: AppVue},
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

export default router;