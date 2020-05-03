import BaseApi from '../../../core/services/BaseApi';

class PizzaListAPI {
  async getPizzaList() {
    // add endpoint here
    let cameData = await BaseApi.get(
      'http://ec2-13-229-51-153.ap-southeast-1.compute.amazonaws.com:8080/product/all',
    );
    return cameData.data.products;
  }
}

export default PizzaListAPI;
