import { defineStore } from "pinia";
import { _request } from "@/http";
import { useGlobalStore } from "./useGlobal";
import constants from "./constants";

export const useDashboardStore = defineStore('dashboard', {
    state() {
        return {
            links: [],
            courses: [],
        }
    },
    getters: {
        dashboardGetter: (state) => (key) => state[key],
    },
    actions: {
        setDashboardLoader(payload) {
            const globalStore = useGlobalStore();
            globalStore.setApploading(payload);
        },
        setLinks(link) {
            const linkExist = this.links.findIndex((l) => {
                return l.to === link.to;
            });
            if (linkExist < 0) {
                this.$patch({
                    links: [...this.links, link],
                })
            }
        },
        courses(params = {}) {
            this.setDashboardLoader(true);
            _request({
                url: constants.courses,
                method: "GET",
                params
            })
                .then((res) => {
                    this.$patch({
                        courses: res.data.rows,
                    });
                    this.setDashboardLoader(false);
                })
                .catch((error) => {
                    this.setDashboardLoader(false);
                    this.toast.error(error?.message);
                });
        }

    }
});