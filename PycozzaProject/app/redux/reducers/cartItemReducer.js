import {ADDTOCART, REMOVEFROMCART} from '../actions/type';

const initialState = 0;

export default cartItem = (state = initialState, action) =>{
    switch (action.type) {
        case ADDTOCART:
            return {
                name: action.name,
                size: action.size,
                crust: action.crust,
                quantity: action.quantity,
            };
        default:
            return state;
    }
}