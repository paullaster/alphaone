import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: {
        loading: false,
    },
    getters: {
        globalStoreGetter: (state) => (key) => state[key],
    },
    actions: {
        setApploading(payload) {
            this.$patch({
                loading: payload,
            });
        }
    }
});