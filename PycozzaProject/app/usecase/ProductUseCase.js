import ProductRepo from '../repositories/ProductRepository/ProductRepo'
class ProductUseCase {
    async getListProduct(type){
        console.log("Get from use case...");
        let a = await new ProductRepo().getListProduct(type);
        return a;
    }

    async saveListProduct(type,productList) {
        await new ProductRepo().saveListProduct(type,productList);
    }
}

export default ProductUseCase;