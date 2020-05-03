const pizzaList = [
  {
    id: 1,
    name: 'PIZZA 4 CHEESE',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C01.png',
    price: {
      sizeS: 89000.0,
      sizeM: 199000.0,
      sizeL: 287000.0,
    },
    description:
      'Made from 4 greasy cheeses: Mozzarella, Parmesan, Cheddar and Cream cheese on Honey Mustard Sauce',
    cheesePrice: {
      extra: 20000,
      double: 30000,
      triple: 50000,
    },
  },
  {
    id: 2,
    name: 'PIZZA TÔM VIỀN PHÔ MAI 3 VỊ',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C02.png',
    price: {
      sizeS: 99000.0,
      sizeM: 299000.0,
      sizeL: 399000.0,
    },
    description:
      'Prawns With Cheese Flavor Three Prawns coated with pineapple, olives and bell peppers on the base Special Cheesy Mayo Sauce',
  },
  {
    id: 3,
    name: 'PREMIUM SEAFOOD PIZZA',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C03.png',
    price: {
      sizeS: 125000.0,
      sizeM: 239000.0,
      sizeL: 335000.0,
    },
    description:
      'Prawns, squid scrumptious with cherry tomatoes, zucchini and Mozzarella cheese on Pesto Sauce',
    cheesePrice: {
      extra: 20000,
      double: 30000,
      triple: 50000,
    },
  },
  {
    id: 4,
    name: 'PREMIUM MIXED PIZZA',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C05.png',
    price: {
      sizeS: 115000.0,
      sizeM: 199000.0,
      sizeL: 287000.0,
    },
    description:
      'Grilled sausages, ham, beef, chicken, pineapple, mushrooms, onions, bell peppers and olives',
  },
  {
    id: 5,
    name: 'PESTO SEAFOOD PIZZA',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C06.png',
    price: {
      sizeS: 115000.0,
      sizeM: 199000.0,
      sizeL: 287000.0,
    },
    description:
      'Shrimp, squid and mushrooms on a typical Pesto sauce, topped with Mozzarella cheese and parsley.',
  },
  {
    id: 6,
    name: 'SEAFOOD WHIRLPOOL PIZZA',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C07.png',
    price: {
      sizeS: 115000.0,
      sizeM: 199000.0,
      sizeL: 287000.0,
    },
    description:
      'Squid, crab stick, pineapple, green pepper, onion-based sauce and mozzarella Cheesy Mayo',
  },
  {
    id: 7,
    name: 'SEAFOOD PIZZA BLACK PEPPER SAUCE',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C08.png',
    price: {
      sizeS: 70000.0,
      sizeM: 129000.0,
      sizeL: 205000.0,
    },
    description:
      'Shrimp, squid, crab stick, onion, black pepper and fragrant sauce government Mozzarella',
    cheesePrice: {
      extra: 20000,
      double: 30000,
      triple: 50000,
    },
  },
  {
    id: 8,
    name: 'SEAFOOD PIZZA BLACK PEPPER SAUCE',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C09.png',
    price: {
      sizeS: 105000.0,
      sizeM: 169000.0,
      sizeL: 289000.0,
    },
    description:
      'Shrimp, squid, crab stick, onion, black pepper and fragrant sauce government Mozzarella',
  },
  {
    id: 9,
    name: 'GRILLED SAUSAGE PIZZA',
    catId: 1,
    imgUrl: 'https://pitsa-bucket.s3-ap-southeast-1.amazonaws.com/C10.png',
    price: {
      sizeS: 105000.0,
      sizeM: 169000.0,
      sizeL: 245000.0,
    },
    description: 'Grilled Sausage and Mozzarella',
  },
];

class PizzaListDAO {
  getPizzaList() {
    let data = pizzaList;
    return data;
  }
}

export default PizzaListDAO;
