import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from '../actions/type';

const job = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        id: action.id,
        title: action.title,
        imageUrl: action.imageUrl,
        sizeType: action.sizeType,
        crustType: action.crustType,
        cheeseType: action.cheeseType,
        quantity: action.quantity,
        totalPrice: action.totalPrice,
      };
    default:
      return state;
  }
};

export default job;
