import { defineStore } from "pinia";

export const useSetupStore = defineStore('setup', {
    state: () => {
        return {

        }
    },
    getters: {
        setGetters: (state) => (key) => state[key],
    }
});