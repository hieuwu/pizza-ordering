import AsyncStorage from '@react-native-community/async-storage';

class ProductDAO {
    async getListProduct(type){
        console.log("Get from DAO...");
        let data = [];
        switch(type) {
            case 'pizza':
                {
                    console.log("Get data from", type);
                    try {
                        data = await AsyncStorage.getItem('pizza') || 'none';
                        if (data === 'none')
                        {
                            return 'none';
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                    return JSON.parse(data);
                }
            case 'sidedish':
                {
                    console.log("Get data from", type);
                    try {
                        data = await AsyncStorage.getItem('sidedish') || 'none';
                        if (data === 'none')
                        {
                            return 'none';
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                    return JSON.parse(data);
                }
            case 'dessert':
                {
                    console.log("Get data from", type);
                    try {
                        data = await AsyncStorage.getItem('dessert') || 'none';
                        if (data === 'none')
                        {
                            return 'none';
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                    return JSON.parse(data);
                }
            case 'beverage':
                {
                    console.log("Get data from", type);
                    try {
                        data = await AsyncStorage.getItem('beverage') || 'none';
                        if (data === 'none')
                        {
                            return 'none';
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                    return JSON.parse(data);
                }
        }

    }
    async saveListProduct(type, productList) {
        console.log('Saved to local');
        let productListJSON = JSON.stringify(productList);
        switch(type) {
            case 'pizza': {
                try {
                    await AsyncStorage.setItem('pizza', productListJSON);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            }
            case 'sidedish': {
                try {
                    await AsyncStorage.setItem('sidedish', productListJSON);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            }
            case 'dessert': {
                try {
                    await AsyncStorage.setItem('dessert', productListJSON);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            }
            case 'beverage': {
                try {
                    await AsyncStorage.setItem('beverage', productListJSON);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            }
        }

    }
}

export default ProductDAO;