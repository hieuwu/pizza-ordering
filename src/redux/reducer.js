import {SET_CATEGORYDATA, SET_USERTOKEN, ADD_TOCART} from './actions.js';

const initState = {
  categoryData: [],
  orderLineArray: [],
  userToken: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORYDATA: {
      return {...state, categoryData: action.data};
    }
    case SET_USERTOKEN: {
      return {...state, userToken: action.userToken};
    }
    case ADD_TOCART: {
      return {...state, orderLineArray: [...state.orderLineArray, action.orderLine]};
    }
    default:
      return state;
  }
};

export default reducer;
