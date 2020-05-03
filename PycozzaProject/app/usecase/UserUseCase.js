import UserRepo from '../repositories/UserRepository/UserRepo'
class UserUseCase {
    async registerAccount(registerForm){
        let response = await new UserRepo().registerAccount(registerForm);
        return response;
    }
    async loginAccount(loginForm) {
        let response = await new UserRepo().loginAccount(loginForm);
        return response;
    }
    async saveUserInformation(userInfo) {
        await new UserRepo().saveUserInformation(userInfo);
    }
    async getUserInformation() {
        let user = await new UserRepo().getUserInformation();
        return user;
    }
    
}

export default UserUseCase;