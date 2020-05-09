import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_LOCAL_CART,
  STORE_LOCAL_CART,
  SET_USER_TOKEN,
  REMOVE_ALL_CART,
} from './type';

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

export const getItemLocalCart = () => {
  return {
    type: GET_LOCAL_CART,
  };
};

export const storeItemToLocalCart = () => {
  return {
    type: STORE_LOCAL_CART,
  };
};

export const setUserToken = userToken => ({
  type: SET_USER_TOKEN,
  userToken,
});

export const removeCart = () => {
  return {
    type: REMOVE_ALL_CART,
  };
};
