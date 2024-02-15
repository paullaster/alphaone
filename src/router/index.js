import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: {name: 'landing'}},
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

export default router;