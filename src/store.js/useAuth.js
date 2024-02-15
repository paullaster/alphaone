import { defineStore } from "pinia";
import { useGlobalStore } from "./useGlobal";
import { _request } from "../http";
import constants from "./constants";

export const useAuthStore = defineStore('auth', {
    state: () =>{
        return {

        }
    },
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
                url: constants.sign,
                data: payload,
                method: 'POST'
            })
            .then((res) => {
                this.setAuthStoreLoader(false);
                this.toast.success(res?.message);
            })
            .catch((error) => {
                console.log(error)
                this.setAuthStoreLoader(false);
                this.toast.error(error?.message);
            });
        },
        createAccount(payload) {
            this.setAuthStoreLoader(true);
            _request({
                url: constants.createUser,
                data: payload,
                method: 'POST',
            })
            .then((res) => {
                
                this.setAuthStoreLoader(false);
                this.toast.success(res?.message);
            })
            .catch((error) => {
                this.setAuthStoreLoader(false);
                this.toast.error(error?.message);
            });
        },
    }
});