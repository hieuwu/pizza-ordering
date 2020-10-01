import {ADDTOCART, REMOVEFROMCART} from '../actions/type';


const  cartItem = (state, action) => {
    switch (action.type) {
        case ADDTOCART:
            return {
                id: action.id,
                name: action.name,
                price: action.price,
                quantity: action.quantity,
                size: action.size,
                crust: action.crust,
                imgLink: action.imgLink,
                };
        default:
            return state;
    }
};

export default cartItem;