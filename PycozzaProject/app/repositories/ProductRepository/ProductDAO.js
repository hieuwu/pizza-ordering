import AsyncStorage from '@react-native-community/async-storage';

class ProductDAO {
    async getListProduct(type){
        let data = [];
        try {
            data = await AsyncStorage.getItem(type) || 'none';
            if (data === 'none')
            {
                return 'none';
            }
        } catch (error) {
            console.log(error.message);
        }
        return JSON.parse(data);
    }
    
    async saveListProduct(type, productList) {
        let productListJSON = JSON.stringify(productList);
        try {
            await AsyncStorage.setItem(type, productListJSON);
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default ProductDAO;