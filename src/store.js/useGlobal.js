import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: {

    },
    getters: {
        globalStoreGetter: (state) => (key) => state[key],
    },
    actions: {

    }
});