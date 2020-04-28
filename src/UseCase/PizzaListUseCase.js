import PizzaListRepo from '../modules/repository/PizzaList/PizzaListRepo';
class PizzaListUseCase {
  async getPizzaList() {
    let pizzaList = await new PizzaListRepo().getPizzaList();
    return pizzaList;
  }
}

export default PizzaListUseCase;
