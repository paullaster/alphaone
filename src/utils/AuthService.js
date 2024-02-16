import { Storage } from "./WebStorage";
import { APPNAME } from "../environment";
class AuthService {
    token = null;
    constructor() {
        this.token = Storage.GetFromWebStorage('session', `${APPNAME}_token`);

    }
    Login(token) {
        this.token = token;
        Storage.RemoveFromStorage('session', `${APPNAME}_token`);
        Storage.storeToWebDB('session', `${APPNAME}_token`, token);

    }
    isLoggedIn() {
        return !!this.token;
    }
    getToken() {
        return this.token;
    }
    User() {
        console.log(atob(this.getToken()))
        return atob(this.getToken());
    }
}


const Auth = new AuthService();

export { Auth };
