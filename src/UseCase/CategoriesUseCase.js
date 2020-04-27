import CategoriesRepo from '../modules/repository/Categories/CategoriesRepo';
class CategoriesUseCase {
  async getCategoriesList() {
    let categories = await new CategoriesRepo().getCategoriesList();
    return categories;
  }
}

export default CategoriesUseCase;
