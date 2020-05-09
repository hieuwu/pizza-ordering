import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_LOCAL_CART,
  STORE_LOCAL_CART,
  REMOVE_ALL_CART,
} from '../actions/type';
import CartUseCase from '../../UseCase/CartUseCase';
import CartItem from './cartItemReducer';

const jobs = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, CartItem(undefined, action.cartLine)];
    case REMOVE_ITEM_FROM_CART: {
      let newArr = [
        ...state.filter((elem, idx) => {
          return elem.id !== action.id;
        }),
      ];
      const storeAction = async () => {
        await new CartUseCase().storeCurrentCart(newArr);
      };
      storeAction();
      return newArr;
    }
    case GET_LOCAL_CART: {
      const getLocalCartAction = async () => {
        let localCart = await new CartUseCase().getCurrentLocalCart();
        return localCart;
      };
      let newState = getLocalCartAction();
      return newState;
    }
    case STORE_LOCAL_CART: {
      console.log('store local cart');
      let newCartList = [...state];
      const storeAction = async () => {
        await new CartUseCase().storeCurrentCart(newCartList);
      };
      storeAction();
      return state;
    }
    case REMOVE_ALL_CART: {
      return [];
    }
    default:
      return state;
  }
};

export default jobs;
