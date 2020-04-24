const menuData = [
  {
    id: 1,
    title: 'Pizza',
    imageSource: require('../../resources/images/menuPizza.jpg'),
  },
  {
    id: 2,
    title: 'Pasta',
    imageSource: require('../../resources/images/menuPasta.jpg'),
  },
  {
    id: 3,
    title: 'Salad',
    imageSource: require('../../resources/images/menuSalad.jpg'),
  },
  {
    id: 4,
    title: 'Dessert',
    imageSource: require('../../resources/images/menuDessert.jpg'),
  },
  {
    id: 5,
    title: 'Beverage',
    imageSource: require('../../resources/images/menuBeverage.jpg'),
  },
];

class MenuDAO {
  getMenuList() {
    let data = menuData;
    return data;
  }
}

export default MenuDAO;
