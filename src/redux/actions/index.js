import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from './type';

export const addItemToCart = cartLine => {
  return {
    type: ADD_ITEM_TO_CART,
    cartLine: cartLine,
  };
};

export const removeItemFromCart = cartLine => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    id: cartLine.id,
  };
};
