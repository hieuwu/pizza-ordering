import MyCartDAO from '../MyCart/MyCartDAO';

class MyCartRepo {
  async getCurrentLocalCart() {
    let localCarts = await new MyCartDAO().getCurrentLocalCart();
    return localCarts;
  }
  async storeCurrentCart(cartList) {
    await new MyCartDAO().storeCurrentCart(cartList);
  }
}

export default MyCartRepo;
