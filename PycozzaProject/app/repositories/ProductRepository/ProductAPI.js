import BaseAPI from '../../services/BaseAPI'

class ProductAPI {
    async getListProduct(type) {
        console.log("Get from API");
        let data = [];
        switch (type) {
            case 'pizza': {
                data = await BaseAPI.get('/product/1');
                return data.data.products;
            };
            case 'sidedish': {
                data = await BaseAPI.get('/product/2');
                return data.data.products;
            };
            case 'dessert': {
                data = await BaseAPI.get('/product/3');
                return data.data.products;
            };
            case 'beverage': {
                data = await BaseAPI.get('/product/4');
                return data.data.products;
            };
        }
    }
}

export default ProductAPI;