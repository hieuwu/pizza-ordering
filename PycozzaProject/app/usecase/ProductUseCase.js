import ProductRepo from '../repositories/ProductRepository/ProductRepo'
class ProductUseCase {
    async getListProduct(){
        console.log("Get from use case...");
        let a = await new ProductRepo().getListProduct();
        return a;
    }
}

export default ProductUseCase;