import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from '../actions/type';
import job from './cartItemReducer';

const jobs = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, job(undefined, action.cartLine)];
    case REMOVE_ITEM_FROM_CART: {
      let newArr = [
        ...state.filter((elem, idx) => {
          return elem.id != action.id;
        }),
      ];
      return newArr;
    }
    default:
      return state;
  }
};

export default jobs;
