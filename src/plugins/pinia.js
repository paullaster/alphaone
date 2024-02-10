import { createPinia } from "pinia";
import { markRaw } from 'vue';
import router from "../router";
import { toast } from "vue3-toastify";

export const pinia = createPinia();
pinia.use(({store}) => {
    store.router = markRaw(router);
    store.toast = markRaw(toast);
})