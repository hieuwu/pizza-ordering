import ProductDAO from './ProductDAO'
import ProductAPI from './ProductAPI';
class ProductRepo {
    async getListProduct(type){
        let data = await new ProductDAO().getListProduct(type);
        if (data == 'none') {
            data = await new ProductAPI().getListProduct(type);
            return data;
        }
        return data;
    }

    async saveListProduct(type,productList) {
        await new ProductDAO().saveListProduct(type,productList)
    }
}

export default ProductRepo;