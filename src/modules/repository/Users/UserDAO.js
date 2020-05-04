import {AsyncStorage} from 'react-native';

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
}

export default UserDAO;
