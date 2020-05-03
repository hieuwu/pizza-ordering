import ProductRepo from '../repositories/ProductRepository/ProductRepo'
class ProductUseCase {
    async getListProduct(type){
        console.log("Get from use case...");
        let a = await new ProductRepo().getListProduct(type);
        return a;
    }
}

export default ProductUseCase;