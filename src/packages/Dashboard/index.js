import routes from "./routes";

export default {
    install(app, option) {
        option.router.addRoute(routes);
    }
}