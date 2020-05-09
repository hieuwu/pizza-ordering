import ProductRepo from '../modules/repository/Product/ProductRepo';
class PizzaListUseCase {
  async getSpaghettiList() {
    let spaghettiList = await new ProductRepo().getSpaghettiList();
    return spaghettiList;
  }

  async getDrinksList() {
    let drinksList = await new ProductRepo().getDrinksList();
    return drinksList;
  }

  async getSaladList() {
    let saladList = await new ProductRepo().getSaladList();
    return saladList;
  }

  async getPizzaList() {
    let pizzaList = await new ProductRepo().getPizzaList();
    return pizzaList;
  }

  async getProductWithId(num) {
    let productList = await new ProductRepo().getProductWithId(num);
    return productList;
  }
}

export default PizzaListUseCase;
