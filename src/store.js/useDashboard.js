import { defineStore } from "pinia";
import { _request } from "@/http";
import { useGlobalStore } from "./useGlobal";
import constants from "./constants";

export const useDashboardStore = defineStore('dashboard', {
    state() {
        return {
            links: [],
            courses: [],
            course: {},
            applications: [],
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
        coursesList(params = {}) {
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
        },
        getCourse(params) {
            this.setDashboardLoader(true);
            _request({
                url: constants.course,
                method: 'GET',
                params,
            })
                .then((res) => {
                    this.setDashboardLoader(false);
                    this.$patch({
                        course: res.data,
                    });
                })
                .catch((error) => {
                    this.setDashboardLoader(false);
                    this.toast.error(error?.message);
                });
        },
        createApplicationRequest(payload) {
            this.setDashboardLoader(true);
            _request({
                url: constants.createApplication,
                method: 'POST',
                data: payload,
            })
                .then((res) => {
                    this.setDashboardLoader(false);
                    this.toast.success(res?.message);
                    this.getApplicationRequest();
                })
                .catch((error) => {
                    this.setDashboardLoader(false);
                    this.toast.error(error?.message);
                });
        },
        getApplicationRequest(params = {}) {
            this.setDashboardLoader(true);
            _request({
                url: constants.getApplication,
                method: 'GET',
                params,
            })
                .then((res) => {
                    this.setDashboardLoader(false);
                    this.toast.success(res?.message);
                    this.$patch({
                        applications: res.data.rows,
                    });
                })
                .catch((error) => {
                    this.setDashboardLoader(false);
                    this.toast.error(error?.message);
                });
        },
    }
});