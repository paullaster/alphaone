import { useDashboardStore } from "@/store.js";

export const addLink = (link) => {
    const dashboardStore = useDashboardStore();
    dashboardStore.setLinks(link);
}