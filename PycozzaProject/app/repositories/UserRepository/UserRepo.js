import UserAPI from './UserAPI'
import UserDAO from './UserDAO';

class UserRepo {
    async registerAccount(registerForm) {
        let response = await new UserAPI().registerAccount(registerForm);
        return response;
    }

    async loginAccount(loginForm) {
        let response = await new UserAPI().loginAccount(loginForm);
        return response;
    }
    async saveUserInformation(userInfo) {
       await new UserDAO().saveUserInformation(userInfo);
    }

    async getUserInformation() {
        let user = await new UserDAO().getUserInformation();
        return user;
    }
}
export default UserRepo;