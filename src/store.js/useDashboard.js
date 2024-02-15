import { defineStore } from "pinia";

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
    }
});