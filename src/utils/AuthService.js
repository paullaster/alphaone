import WebStorage from "../../utils/WebStorage";
import { APPNAME } from "../../environments";
class AuthService {
    token = null;
    user = null;

    constructor() {
        this.token = WebStorage.GetFromWebStorage('session', `${APPNAME}_accessToken`);
        this.refreshtoken = WebStorage.GetFromWebStorage('local', `${APPNAME}_refreshToken`);

    }
    Login(accessToken) {
        this.accessToken = accessToken;
        this.refreshtoken = refreshToken;
        WebStorage.RemoveFromStorage('session', `${APPNAME}_accessToken`);
        WebStorage.RemoveFromStorage('local', `${APPNAME}_refreshToken`);
        WebStorage.storeToWebDB('session', `${APPNAME}_accessToken`, accessToken);
        WebStorage.storeToWebDB('local', `${APPNAME}_refreshToken`, refreshToken);

    }
    isLoggedIn() {
        return !!this.accessToken;
    }
    getAccessToken() {
        return this.accessToken;
    }
}


const Auth = new AuthService();
Object.freeze(Auth);

export { Auth };
