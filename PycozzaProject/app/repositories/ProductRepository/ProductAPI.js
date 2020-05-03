import BaseAPI from '../../services/BaseAPI'

class ProductAPI {
    async getListProduct(type) {
        let data = [];
        switch (type) {
            case 'pizza': {
                data = await BaseAPI.get('/product/1');
                return data;
            };
            case 'sidedish': {
                data = await BaseAPI.get('/product/2');
                return data;
            };
            case 'dessert': {
                data = await BaseAPI.get('/product/3');
                return data;
            };
            case 'beverage': {
                data = await BaseAPI.get('/product/4');
                return data;
            };
        }
    }
}

export default ProductAPI;