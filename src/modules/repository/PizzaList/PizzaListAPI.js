import BaseApi from '../../../core/services/BaseApi';

class PizzaListAPI {
  async getPizzaList() {
    // add endpoint here
    let data = await BaseApi.get('');
    return data;
  }
}

export default PizzaListAPI;
