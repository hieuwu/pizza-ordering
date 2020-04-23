import ProductDAO from './ProductDAO'
class ProductRepo {
    getListProduct(){
        // if DAO is empty, fetch data from API
        console.log("Get from REPO...");
        let a = new ProductDAO().getListProduct();
        return a;
    }
}

export default ProductRepo;