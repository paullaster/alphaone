import routes from "./router";
import { addLink } from "@/utils/addSidebarLinks";
import links from "./links";

export default {
    install(app, option) {
        option.router.addRoute(routes);

        addLink(links);
    }
}