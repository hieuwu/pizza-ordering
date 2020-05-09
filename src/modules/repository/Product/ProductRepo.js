import ProductAPI from './ProductAPI';
class ProductRepo {
  async getSpaghettiList() {
    let spaghettiList = await new ProductAPI().getSpaghettiList();
    return spaghettiList;
  }

  async getDrinksList() {
    let drinksList = await new ProductAPI().getDrinksList();
    return drinksList;
  }

  async getSaladList() {
    let saladList = await new ProductAPI().getSaladList();
    return saladList;
  }

  async getPizzaList() {
    let pizzaList = await new ProductAPI().getPizzaList();
    return pizzaList;
  }

  async getProductWithId(num) {
    let productList = await new ProductAPI().getProductWithId(num);
    return productList;
  }
}

export default ProductRepo;
