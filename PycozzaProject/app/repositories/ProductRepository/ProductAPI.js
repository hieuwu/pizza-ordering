import BaseAPI from '../../services/BaseAPI'

class ProductAPI {
    async getListProduct(){
        let data = await BaseAPI.get('/product/1', );
        return data;
    }
}

export default ProductAPI;