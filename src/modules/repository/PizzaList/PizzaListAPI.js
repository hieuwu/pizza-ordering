import BaseApi from '../../../core/services/BaseApi';

class PizzaListAPI {
  async getPizzaList() {
    // add endpoint here
    let cameData = await BaseApi.get('/product/all');
    return cameData.data.products;
  }
}

export default PizzaListAPI;
