import BaseAPI from '../../services/BaseAPI'

class ProductAPI {
    async getListProduct(){
        let data = await BaseAPI.get('/facts');
        return data;
    }
}

export default ProductAPI;