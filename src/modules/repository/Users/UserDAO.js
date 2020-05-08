import AsyncStorage from '@react-native-community/async-storage';

class UserDAO {
  async getUserInfo() {
    let userData = '';
    try {
      userData = (await AsyncStorage.getItem('userInfo')) || '';
    } catch (error) {
      console.log(error.message);
    }
    return JSON.parse(userData);
  }

  async saveUserInfo(userInfo) {
    let userData = JSON.stringify(userInfo);
    try {
      await AsyncStorage.setItem('userInfo', userData);
    } catch (error) {
      console.log(error.message);
    }
  }

  async saveUserToken(userToken) {
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getUserToken() {
    let userToken = '';
    try {
      userToken = (await AsyncStorage.getItem('userToken')) || '';
    } catch (error) {
      console.log(error.message);
    }
    return userToken;
  }
}

export default UserDAO;
