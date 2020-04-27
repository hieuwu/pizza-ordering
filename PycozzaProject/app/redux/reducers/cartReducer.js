import {ADDTOCART, REMOVEFROMCART} from '../actions/type';
import cartItem from './cartItemReducer'

export default cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADDTOCART:
            return [...state, cartItem(undefined,action)];
        default:
            return state;
    }
}