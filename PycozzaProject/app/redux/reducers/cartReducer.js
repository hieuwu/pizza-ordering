import { ADDTOCART, REMOVEFROMCART, LOADLOCALCART, SAVELOCALCART } from '../actions/type';
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
        case LOADLOCALCART:
            {
            
                //Load cart from local storage
                console.log("Cart is loaded !!!");
                const load = async () => {
                    let data = await new CartUseCase().getCart();
                    return data;
                }
                let newState = load();
                return newState;
            }
        case SAVELOCALCART:
            {
                //Save cart to lo cal storage
                console.log("Cart is storedd");
                let newArr = [...state]
                const save = async () => {
                    await new CartUseCase().saveCart(newArr);
                }
                save();
                return state;
              
            }
        default:
            return state;
    }
};


export default cartReducer;