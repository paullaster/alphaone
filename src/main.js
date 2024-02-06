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
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

AppInstace.use(router).use(vuetify).mount('#app')
