import MyCartRepo from '../modules/repository/MyCart/MyCartRepo';

class CartUseCase {
  async getCurrentLocalCart() {
    let localCart = await new MyCartRepo().getCurrentLocalCart();
    return localCart;
  }
  async storeCurrentCart(cartList) {
    await new MyCartRepo().storeCurrentCart(cartList);
  }
  async removeCart() {
    await new MyCartRepo().removeCart();
  }
}

export default CartUseCase;
