import CategoriesAPI from './CategoriesAPI';
import CategoriesDAO from './CategoriesDAO';
class CategoriesRepo {
  async getCategoriesList() {
    let categoriesList = await new CategoriesDAO().getCategoriesList();
    return categoriesList;
  }
}

export default CategoriesRepo;
