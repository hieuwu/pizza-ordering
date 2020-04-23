import ProductRepo from './ProductRepo'
class ProductUseCase {
    getListProduct(){
        console.log("Get from use case...");
        let a = new ProductRepo().getListProduct();
        return a;
    }
}

export default ProductUseCase;