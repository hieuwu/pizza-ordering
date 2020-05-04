import UserAPI from './UserAPI';
import UserDAO from './UserDAO';

class UserRepo {
  async signUpUser(signUpData) {
    let response = await new UserAPI().signUpUser(signUpData);
    return response;
  }

  async signInUser(loginData) {
    let response = await new UserAPI().signIn(loginData);
    return response;
  }

  async getUserInfo() {
    let userData = await new UserDAO().getUserInfo();
    return userData;
  }

  async saveUserInfo(userData) {
    await new UserDAO().saveUserInfo(userData);
  }
}

export default UserRepo;
