import routes from "./routes";
import { addLink } from "@/utils/addSidebarLinks";

export default {
    install(app, option) {
        option.router.addRoute(routes);
    }
}