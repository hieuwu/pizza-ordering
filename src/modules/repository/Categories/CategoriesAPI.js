import BaseApi from '../../../core/services/BaseApi';

class CategoriesAPI {
  async getCategoriesList() {
    // add endpoint here
    let cameData = await BaseApi.get('');
    return cameData;
  }
}

export default CategoriesAPI;
