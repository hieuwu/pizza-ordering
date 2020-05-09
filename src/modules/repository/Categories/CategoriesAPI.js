import BaseApi from '../../../core/services/BaseApi';

class CategoriesAPI {
  async getCategoriesList() {
    let cameData = await BaseApi.get('/category');
    return cameData;
  }
}

export default CategoriesAPI;
