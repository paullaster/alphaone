import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";



const AppInstace = createApp(App);


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



//Packages
import Landing from './packages/Landing';


const option = { router }

AppInstace.use(Landing, option);
AppInstace.use(Dashboard, option);

// Vuetify
import vuetify from './plugins/vuetify';
import { pinia } from './plugins/pinia';
import Dashboard from './packages/Dashboard';


AppInstace.use(router).use(vuetify).mount('#app');
