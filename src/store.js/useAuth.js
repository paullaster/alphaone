import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: {},
    getters: {
        authStoregetter: (state) => (key) => state[key],
    },
    actions: {
        confirmEmail(payload) {
            
        }
    }
});