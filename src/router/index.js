import { createRouter, createWebHashHistory } from 'vue-router';
import { Auth } from '../utils';

const routes = [
    { path: '/', redirect: {name: 'landing'}},
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !Auth.isLoggedIn()) {
      next({name: 'getstarted', params: {option: 'login'}})
    }else {
      next();
    }
  }); 
export default router;