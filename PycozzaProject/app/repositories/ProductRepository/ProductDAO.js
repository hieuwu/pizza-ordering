import AsyncStorage from '@react-native-community/async-storage';

class ProductDAO {
    async getListProduct(type){
        console.log("Get from DAO...");
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
        console.log('Saved to local');
        let productListJSON = JSON.stringify(productList);
        try {
            await AsyncStorage.setItem(type, productListJSON);
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default ProductDAO;