const pizzaList = [
  {
    id: 1,
    title: 'PRIME BEEF',
    imageSource:
      'https://dominos.vn/Data/Sites/1/Product/577/prime-beef-full.png',
    largePrice: '$18.34',
    mediumPrice: '$14.60',
  },
  {
    id: 2,
    title: 'SINGAPORE STYLE SEAFOOD',
    imageSource:
      'https://dominos.vn/Data/Sites/1/Product/576/sing-seafood2-full.png',
    largePrice: '$18.34',
    mediumPrice: '$14.60',
  },
  {
    id: 3,
    title: 'PIZZAMIN SEA',
    imageSource:
      'https://dominos.vn/Data/Sites/1/Product/723/seafood-island.png',
    largePrice: '$18.34',
    mediumPrice: '$14.60',
  },
  {
    id: 4,
    title: 'TERIYAKI CHICKEN',
    imageSource:
      'https://dominos.vn/Data/Sites/1/Product/585/teriyaki-chicken2-full.png',
    largePrice: '$18.34',
    mediumPrice: '$14.60',
  },
  {
    id: 5,
    title: 'PEPPERONI FEAST',
    imageSource:
      'https://dominos.vn/Data/Sites/1/Product/583/pepper-roni-full.png',
    largePrice: '$18.34',
    mediumPrice: '$14.60',
  },
];

class PizzaListDAO {
  getPizzaList() {
    let data = pizzaList;
    return data;
  }
}

export default PizzaListDAO;
