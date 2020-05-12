import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from '../../config/AppConfig'
class UserDAO {
    async saveUserInformation(userInfo) {
        let userJson = JSON.stringify(userInfo);
        try {
            await AsyncStorage.setItem(AppConfig.LOCAL_KEY.userInfo, userJson);
        } catch (error) {
            console.log(error.message);
        }
    }

    async getUserInformation() {
        let userInfo = '';
        try {
            userInfo = await AsyncStorage.getItem(AppConfig.LOCAL_KEY.userInfo) || 'none';
            if (userInfo === 'none')
            {
                return 'none';
            }
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return JSON.parse(userInfo);
    }
    async logoutAccount() {
        try {
            await AsyncStorage.removeItem(AppConfig.LOCAL_KEY.userInfo);
          } catch (error) {
            // Error retrieving data
            console.log(error.message);
          } 
    }
}

export default UserDAO;