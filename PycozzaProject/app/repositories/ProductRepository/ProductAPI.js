import BaseAPI from '../../services/BaseAPI'
import AppConfig from '../../config/AppConfig'
class ProductAPI {
    async getListProduct(type) {
        let url = AppConfig.API_ENDPOINT.product+type;
        let data = await BaseAPI.get(url);
        return data.data.products;
    }
}

export default ProductAPI;