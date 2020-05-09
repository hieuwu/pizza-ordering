import BaseApi from '../../../core/services/BaseApi';

class PizzaListAPI {
  async getPizzaList() {
    // add endpoint here
    let cameData = await BaseApi.get('/product/4');
    // let cameData = await BaseApi.get('/h/pizza');
    console.log('call pizza list api');
    return cameData.data.products;
  }
}

export default PizzaListAPI;
