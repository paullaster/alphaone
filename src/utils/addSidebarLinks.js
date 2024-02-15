import { use } from "@/store";

export const addLink = (link) => {
    const globalStore = useGlobalStore();
      globalStore.setLinks(link);
}