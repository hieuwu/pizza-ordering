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
}

export default UserUseCase;
