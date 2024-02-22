import { useDashboardStore } from "@/store";

export const addLink = (link) => {
    const dashboardStore = useDashboardStore();
    dashboardStore.setLinks(link);
}