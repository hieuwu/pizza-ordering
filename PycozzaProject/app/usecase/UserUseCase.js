import UserRepo from '../repositories/UserRepository/UserRepo'
class UserUseCase {
    async registerAccount(registerForm) {
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
    async logoutAccount() {
        await new UserRepo().logoutAccount();
    }

    async completeOrder(orderForm) {
        let response = await new UserRepo().completeOrder(orderForm);
        return response;
    }

    isValidEmail = (email) => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(String(email).toLowerCase()))
            return true;
        if (email.length < 1)
            return false;
        return false;
    }

    isValidName = (name) => {
        return true;
    }

    isValidPhoneNumber = (phone) => {
        let pattern = /^[0-9]*$/;
        let stringPhone = String(phone);
        if (pattern.test(stringPhone) && (stringPhone.length == 10))
            return true;
        return false;
    }

    isValidPassword = (password) => {
        if ((password.length > 7) && (password.length < 17)) {
            return true;
        }
        return false;
    }

    isValidConfirm = (password, confirmPassword) => {
        if ((password === confirmPassword) && this.isValidPassword(password)) {
            return true;
        }
        return false;
    }
    isValidAddress = (someAddress) => {
        let address = String(someAddress);
        if (address.length < 5) return false;
        return true;
    }


}

export default UserUseCase;