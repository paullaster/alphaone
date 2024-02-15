import { useDashboardStore } from "@/store.js";

export const addLink = (link) => {
    const globalStore = useGlobalStore();
      globalStore.setLinks(link);
}