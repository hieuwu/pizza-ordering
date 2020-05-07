import BaseApi from '../../../core/services/BaseApi';

class PizzaListAPI {
  async getPizzaList() {
    // add endpoint here
    // let cameData = await BaseApi.get('/product/all');
    console.log('call pizza list api');
    let cameData = await BaseApi.get('/h/pizza');
    return cameData.data.products;
  }
}

export default PizzaListAPI;
