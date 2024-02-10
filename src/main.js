import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';



const AppInstace = createApp(App)
//Packages
import Landing from './packages/Landing';


const option = {router}

AppInstace.use(Landing, option);

// Vuetify
import vuetify from './plugins/vuetify';


AppInstace.use(router).use(vuetify).mount('#app')
