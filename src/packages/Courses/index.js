import routes from "./routes";
import links from "./links";
import { addLink } from "@/utils/addSidebarLinks";

export default {
    install(app, option) {
        option.router.addRoute(routes);

        addLink(links);
    }
}