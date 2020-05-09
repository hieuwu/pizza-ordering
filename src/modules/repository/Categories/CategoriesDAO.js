const categoriesList = [
  {
    catId: 1,
    categoryName: 'Spaghetti',
    imgUrl:
      'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/categoryImges/spaghetti.jpg',
  },
  {
    catId: 2,
    categoryName: 'Drinks',
    imgUrl:
      'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/categoryImges/drinks.jpg',
  },
  {
    catId: 3,
    categoryName: 'Salad',
    imgUrl:
      'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/categoryImges/salad.jpg',
  },
  {
    catId: 4,
    categoryName: 'Pizza',
    imgUrl:
      'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/categoryImges/pizza.jpg',
  },
];

class CategoriesDAO {
  getCategoriesList() {
    let data = categoriesList;
    return data;
  }
}

export default CategoriesDAO;
