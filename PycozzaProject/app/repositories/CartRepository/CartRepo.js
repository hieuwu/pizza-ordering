import CartDAO from "./CartDAO";

class CartRepo {
    async getCart(){
        let data = await new CartDAO().getCart();
        return data;
    }
    async saveCart(currentCart) {
         await new CartDAO().saveCart(currentCart);
    }
}

export default CartRepo;