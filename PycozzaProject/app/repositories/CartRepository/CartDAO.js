import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from '../../config/AppConfig';
class CartDAO {
    async getCart(){
        let currentCart = '';
        try {
            currentCart = await AsyncStorage.getItem(AppConfig.LOCAL_KEY.currentCart) || 'none';
            if (currentCart === 'none')
            {
                return 'none';
            }
        } catch (error) {
            console.log(error.message);
        }
        return JSON.parse(currentCart);
    }

    async saveCart(currentCart) {
        let currentCartJSON = JSON.stringify(currentCart);
        try {
            await AsyncStorage.setItem(AppConfig.LOCAL_KEY.currentCart, currentCartJSON);
        } catch (error) {
            console.log(error.message);
        }
    }

    async removeCart() {
        try {
            await AsyncStorage.removeItem(AppConfig.LOCAL_KEY.currentCart);
          } catch (error) {
            // Error retrieving data
            console.log(error.message);
          } 
    }
}

export default CartDAO;