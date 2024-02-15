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
    gettoken() {
        return this.token;
    }
}


const Auth = new AuthService();
Object.freeze(Auth);

export { Auth };
