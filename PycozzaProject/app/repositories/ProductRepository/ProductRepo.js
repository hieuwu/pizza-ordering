import ProductDAO from './ProductDAO'
import ProductAPI from './ProductAPI';
class ProductRepo {
    async getListProduct(type){
        // if DAO is empty, fetch data from API
        console.log("Get from REPO...");
        let a = await new ProductAPI().getListProduct(type);
        return a;
    }
}

export default ProductRepo;