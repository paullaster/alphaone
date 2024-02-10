import { defineStore } from "pinia";
import { useGlobalStore } from "./useGlobal";
import { _request } from "../http";
import constants from "./constants";

export const useAuthStore = defineStore('auth', {
    state: {},
    getters: {
        authStoregetter: (state) => (key) => state[key],
    },
    actions: {
        setAuthStoreLoader(payload) {
            const globalStore = useGlobalStore();
            globalStore.setApploading(payload);
        },
        confirmEmail(payload) {
            this.setAuthStoreLoader(true);
            _request({
                url: constants.sign
            })
        }
    }
});