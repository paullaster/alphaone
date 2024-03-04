import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Auth } from './utils';
// Vuetify
import vuetify from './plugins/vuetify';
import { pinia } from './plugins/pinia';
//Packages
import Landing from './packages/Landing';
import Dashboard from './packages/Dashboard';
import Courses from './packages/Courses';


const AppInstace = createApp(App);

// GLBAL PROVIDERS
AppInstace.provide('Auth', Auth);

// GLOBAL TOASTER
AppInstace.use(Vue3Toasity, {
    autoClose: 2000,
    style: {
        opacity: "1",
        userSelect: "initial",
    }
});

// ADD PINIA
AppInstace.use(pinia);





const option = { router }

AppInstace.use(Landing, option);
AppInstace.use(Dashboard, option);
AppInstace.use(Courses, option);



AppInstace.use(router).use(vuetify).mount('#app');
