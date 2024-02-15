import WebStorage from "./WebStorage";
import { APPNAME } from "../environment";
class AuthService {
    token = null;

    constructor() {
        this.token = WebStorage.GetFromWebStorage('session', `${APPNAME}_token`);

    }
    Login(token) {
        this.token = token;
        WebStorage.RemoveFromStorage('session', `${APPNAME}_token`);
        WebStorage.storeToWebDB('session', `${APPNAME}_token`, token);

    }
    isLoggedIn() {
        return !!this.token;
    }
    getToken() {
        return this.token;
    }
    User() {
        return atob(this.getToken());
    }
}


const Auth = new AuthService();
Object.freeze(Auth);

export { Auth };
