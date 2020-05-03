import { ADDTOCART, REMOVEFROMCART } from '../actions/type';
import cartItem from './cartItemReducer'

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADDTOCART:
            return [
                ...state,
                cartItem(undefined, action.orderLine)
            ];
        case REMOVEFROMCART:
            {
                let newArr = [...state.filter((elem, idx) => {
                        return elem.id != action.id
                    })];
                    return newArr;
            }
        default:
            return state;
    }
};


export default cartReducer;