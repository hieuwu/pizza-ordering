import AsyncStorage from '@react-native-community/async-storage';

class MyCartDAO {
  async getCurrentLocalCart() {
    let cartData = '';
    try {
      cartData = (await AsyncStorage.getItem('currentCart')) || '';
      if (cartData === '') {
        return '';
      }
    } catch (e) {
      console.log(e.message);
    }
    console.log('get current cart in DAO : ' + cartData);
    return JSON.parse(cartData);
  }
  async storeCurrentCart(cartList) {
    let cartData = JSON.stringify(cartList);
    console.log('store current local cart in DAO :' + cartData);
    try {
      await AsyncStorage.setItem('currentCart', cartData);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default MyCartDAO;
