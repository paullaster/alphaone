import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import Vue3Toasity from "vue3-toastify";



const AppInstace = createApp(App);


// GLOBAL TOASTER
AppInstace.use(Vue3Toasity, {
    autoClose: 2000,
    style: {
        opacity: "1",
        userSelect: "initial",
    }
});



//Packages
import Landing from './packages/Landing';


const option = { router }

AppInstace.use(Landing, option);

// Vuetify
import vuetify from './plugins/vuetify';
import { pinia } from './plugins/pinia';


AppInstace.use(router).use(vuetify).use(pinia).mount('#app');
