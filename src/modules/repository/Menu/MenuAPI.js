import BaseApi from '../../../core/services/BaseApi';

class MenuAPI {
  async getMenuList() {
    // add endpoint here
    let data = await BaseApi.get('');
    return data;
  }
}

export default MenuAPI;
