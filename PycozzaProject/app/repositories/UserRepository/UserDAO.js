import {  AsyncStorage} from 'react-native'

class UserDAO {
    async saveUserInformation(userInfo) {
        let userJson = JSON.stringify(userInfo);
        try {
            await AsyncStorage.setItem('userInfo', userJson);
        } catch (error) {
            console.log(error.message);
        }
        console.log('User information is stored');
    }

    async getUserInformation() {
        let userInfo = '';
        try {
            userInfo = await AsyncStorage.getItem('userInfo') || 'none';
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        console.log("Data retrieved !!!");
        return JSON.parse(userInfo);
    }
}

export default UserDAO;