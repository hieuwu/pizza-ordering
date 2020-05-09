import BaseApi from '../../../core/services/BaseApi';

class ProductAPI {
  async getSpaghettiList() {
    let spaghettiList = await BaseApi.get('/product/1');
    return spaghettiList.data.products;
  }

  async getDrinksList() {
    let drinksList = await BaseApi.get('/product/2');
    return drinksList.data.products;
  }

  async getSaladList() {
    let saladList = await BaseApi.get('/product/3');
    return saladList.data.products;
  }

  async getPizzaList() {
    let pizzaList = await BaseApi.get('/product/4');
    return pizzaList.data.products;
  }

  async getProductWithId(num) {
    let productList = await BaseApi.get('/product/' + num);
    return productList.data.products;
  }
}

export default ProductAPI;
