import { defineStore } from "pinia";

export const useDashboardStore = defineStore('dashboard', {
    state() {
        return {

        }
    },
    getters: {
        dashboardGetter: (state) => (key) => state[key]
    }
});