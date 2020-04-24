import BaseApi from '../../../core/services/BaseApi';

class ProductAPI {
  async getListProducts() {
    // add endpoint here
    let data = await BaseApi.get('');
    return data;
  }
}

export default ProductAPI;
