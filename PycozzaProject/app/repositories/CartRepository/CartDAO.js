import AsyncStorage from '@react-native-community/async-storage';
class CartDAO {
    async getCart(){
        let currentCart = '';
        try {
            currentCart = await AsyncStorage.getItem('currentCart') || 'none';
            if (currentCart === 'none')
            {
                return 'none';
            }
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        console.log("Cart is get !!!");
        return JSON.parse(currentCart);
    }

    async saveCart(currentCart) {
        let currentCartJSON = JSON.stringify(currentCart);
        try {
            await AsyncStorage.setItem('currentCart', currentCartJSON);
        } catch (error) {
            console.log(error.message);
        }
        console.log('Save cart');
    }

    async removeCart() {
        try {
            console.log('Remove from local');
            await AsyncStorage.removeItem('currentCart');
          } catch (error) {
            // Error retrieving data
            console.log(error.message);
          } 
    }
}

export default CartDAO;