import BaseApi from '../../../core/services/BaseApi';

class CategoriesAPI {
  async getCategoriesList() {
    // add endpoint here
    let data = await BaseApi.get('');
    return data;
  }
}

export default CategoriesAPI;
