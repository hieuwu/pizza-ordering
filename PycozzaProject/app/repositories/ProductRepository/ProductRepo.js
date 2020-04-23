import ProductDAO from './ProductDAO'
import ProductAPI from './ProductAPI';
class ProductRepo {
    async getListProduct(){
        // if DAO is empty, fetch data from API
        console.log("Get from REPO...");
        let a = await new ProductDAO().getListProduct();
        return a;
    }
}

export default ProductRepo;