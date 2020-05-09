import CategoriesAPI from './CategoriesAPI';
import CategoriesDAO from './CategoriesDAO';
class CategoriesRepo {
  async getCategoriesList() {
    let categoriesList = await new CategoriesAPI().getCategoriesList();
    return categoriesList;
  }
}

export default CategoriesRepo;
