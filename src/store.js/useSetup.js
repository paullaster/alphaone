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
            _request({
                url: constants.images,
                method: 'GET',
                params
            })
            .then((res) => {
                this.$patch({
                    images: res.data.rows,
                });
            })
            .catch((error) => {
                this.toast.error(error?.message);
            })
        }
    }
});