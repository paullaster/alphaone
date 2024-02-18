import { defineStore } from "pinia";
import { _request } from "@/http";
import constants from "./constants";

export const useSetupStore = defineStore('setup', {
    state: () => {
        return {
            images: [],
            image: {},
        }
    },
    getters: {
        setupGetters: (state) => (key) => state[key],
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
            });
        },
        fetchSingleImage(params){
            _request({
                url: constants.image,
                method: 'GET',
                params,
            })
            .then((res) => {
                this.$patch({
                    image: res.data,
                });
            })
            .catch((error) => {
                this.toast.error(error?.message);
            });
        },
        getCountries(params){
            _request({
                url: constants.countries,
                method: 'GET',
                params,
            })
            .then((res) => {
                this.$patch({
                    countries: res.data,
                });
            })
            .catch((error) => {
                this.toast.error(error?.message);
            });
        }
    }
});