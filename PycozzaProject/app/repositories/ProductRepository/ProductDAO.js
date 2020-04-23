const productList = [
    {
        id: '1',
        name: 'Pizza Chinese',
        price: '100.000',
        imageURL: 'https://thepizzacompany.vn/345-home_default/bread-pizza.jpg'
    },
    {
        id: '2',
        name: 'Pizza Seafood',
        price: '100.000',
        imageURL: 'https://thepizzacompany.vn/345-home_default/bread-pizza.jpg'
    },
    {
        id: '3',
        name: 'Pizza Beef',
        price: '50.000',
        imageURL: 'https://thepizzacompany.vn/114-home_default/pizza-hawaii.jpg'

    },
    {
        id: '4',
        name: 'Cheese Pizza',
        price: '300.000',
        imageURL: 'https://thepizzacompany.vn/117-home_default/pizza-hawaii.jpg'

    },
    {
        id: '5',
        name: 'Not Pizza',
        price: '900.000',
        imageURL: 'https://thepizzacompany.vn/243-home_default/pizza-hawaii.jpg'

    },
    {
        id: '6',
        name: 'Vegetable Pizza',
        price: '200.000',
        imageURL: 'https://thepizzacompany.vn/295-home_default/pizza-hawaii.jpg'

    },
    {
        id: '7',
        name: 'Vegetable Pizza',
        price: '200.000',
        imageURL: 'https://thepizzacompany.vn/121-home_default/pizza-hawaii.jpg'

    },
    {
        id: '8',
        name: 'Vegetable Pizza',
        price: '200.000',
        imageURL: 'https://thepizzacompany.vn/244-home_default/pizza-hawaii.jpg'

    },
    {
        id: '9',
        name: 'Vegetable Pizza',
        price: '200.000',
        imageURL: 'https://thepizzacompany.vn/244-home_default/pizza-hawaii.jpg'

    },
];

class ProductDAO {
    getListProduct(){
        console.log("Get from DAO...");
        let data = productList;
        return data;
    }
}

export default ProductDAO;