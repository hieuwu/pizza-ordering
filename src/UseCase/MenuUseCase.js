import MenuRepo from '../modules/repository/Menu/MenuRepo';
class MenuUseCase {
  async getMenuList() {
    let menu = await new MenuRepo().getMenuList();
    return menu;
  }
}

export default MenuUseCase;
