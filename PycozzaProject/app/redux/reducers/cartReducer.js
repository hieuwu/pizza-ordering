import { ADDTOCART, REMOVEFROMCART, LOADLOCALCART, SAVELOCALCART, REMOVECART } from '../actions/type';
import cartItem from './cartItemReducer'
import CartUseCase from '../../usecase/CartUsceCase.js'
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADDTOCART:
            return [
                ...state,
                cartItem(undefined, action.orderLine)
            ];
        case REMOVEFROMCART: {
            let newArr = [...state.filter((elem, idx) => {
                return elem.id != action.id
            })];
            const save = async () => {
                await new CartUseCase().saveCart(newArr);
            }
            save();
            return newArr;
        }
        case SAVELOCALCART:
            {
                let newArr = [...state]
                const save = async () => {
                    await new CartUseCase().saveCart(newArr);
                }
                save();
                return state;
            }
        case REMOVECART: {
            return [];
        }
        default:
            return state;
    }
};


export default cartReducer;