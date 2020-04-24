import MenuAPI from './MenuAPI';
import MenuDAO from './MenuDAO';
class MenuRepo {
  async getMenuList() {
    let menuList = await new MenuDAO().getMenuList();
    return menuList;
  }
}

export default MenuRepo;
