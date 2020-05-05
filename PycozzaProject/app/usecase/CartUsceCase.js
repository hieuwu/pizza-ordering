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
}

export default CartUseCase;