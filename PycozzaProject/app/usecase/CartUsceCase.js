import ProductRepo from '../repositories/ProductRepository/ProductRepo'
import CartRepo from '../repositories/CartRepository/CartRepo';
class CartUseCase {
    async getCart(){
        let data = await new CartRepo().getCart();
        return data;
    }
    async saveCart(currentCart) {
        await new CartRepo().saveCart(currentCart);
    }

    async removeCart() {
        await new CartRepo().removeCart();
    }
}

export default CartUseCase;