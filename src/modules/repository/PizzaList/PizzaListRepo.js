import PizzaListAPI from './PizzaListAPI';
import PizzaListDAO from './PizzaListDAO';
class PizzaListRepo {
  async getPizzaList() {
    let pizzaList = await new PizzaListDAO().getPizzaList();
    return pizzaList;
  }
}

export default PizzaListRepo;
