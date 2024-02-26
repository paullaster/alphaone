import { createPinia } from "pinia";
import { markRaw } from 'vue';
import router from "../router";
import { toast } from "vue3-toastify";
import { Auth } from "../utils";


const User = Auth.User();
export const pinia = createPinia();
pinia.use(({store}) => {
    store.router = markRaw(router);
    store.toast = markRaw(toast);
    store.User = markRaw(User);
})