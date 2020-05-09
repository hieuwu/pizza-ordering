import MyCartDAO from '../MyCart/MyCartDAO';

class MyCartRepo {
  async getCurrentLocalCart() {
    let localCarts = await new MyCartDAO().getCurrentLocalCart();
    return localCarts;
  }
  async storeCurrentCart(cartList) {
    await new MyCartDAO().storeCurrentCart(cartList);
  }
  async removeCart() {
    await new MyCartDAO().removeCart();
  }
}

export default MyCartRepo;
