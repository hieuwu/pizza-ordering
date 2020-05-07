import PizzaListAPI from './PizzaListAPI';
import PizzaListDAO from './PizzaListDAO';
class PizzaListRepo {
  async getPizzaList() {
    let pizzaList = await new PizzaListAPI().getPizzaList();
    return pizzaList;
  }
}

export default PizzaListRepo;
