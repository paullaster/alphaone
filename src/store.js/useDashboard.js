import { defineStore } from "pinia";
import { _request } from '@/utils';
import { useGlobalStore } from "./useGlobal";

export const useDashboardStore = defineStore('dashboard', {
    state() {
        return {
            links: [],
        }
    },
    getters: {
        dashboardGetter: (state) => (key) => state[key]
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
        courses(params){
            
        }

    }
});