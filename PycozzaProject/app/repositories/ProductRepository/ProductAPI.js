import BaseAPI from '../../services/BaseAPI'

class ProductAPI {
    async getListProduct(type) {
        console.log("Get from API of", type);
        let url = '/product/'+type;
        let data = await BaseAPI.get(url);
        return data.data.products;
    }
}

export default ProductAPI;