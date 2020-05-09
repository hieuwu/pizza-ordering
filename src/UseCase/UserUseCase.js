import UserRepo from '../modules/repository/Users/UserRepo';

class UserUseCase {
  async signUpUser(userData) {
    let response = await new UserRepo().signUpUser(userData);
    return response;
  }
  async signInUser(userData) {
    let response = await new UserRepo().signInUser(userData);
    return response;
  }
  async getUserInfo() {
    let userInfo = await new UserRepo().getUserInfo();
    if (userInfo !== '') {
      return userInfo;
    } else {
      console.log('empty user information');
      return null;
    }
  }

  async saveUserInfo(userData) {
    await new UserRepo().saveUserInfo(userData);
  }

  async saveUserToken(userToken) {
    await new UserRepo().saveUserToken(userToken);
  }

  async getUserToken() {
    let userToken = await new UserRepo().getUserToken();
    if (userToken !== '') {
      return userToken;
    } else {
      console.log('empty user token');
      return null;
    }
  }

  async signOutUser() {
    await new UserRepo().signOutUser();
  }
}

export default UserUseCase;
