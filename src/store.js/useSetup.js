import { defineStore } from "pinia";
import { _request } from "@/http";
import constants from "./constants";

export const useSetupStore = defineStore('setup', {
    state: () => {
        return {
            images: [],
        }
    },
    getters: {
        setGetters: (state) => (key) => state[key],
    },
    actions: {
        getImages(params) {
            
        }
    }
});