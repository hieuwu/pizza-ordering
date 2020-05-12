import {
  SET_CATEGORYDATA,
  SET_USERTOKEN,
  ADD_TOCART,
  DELETE_ORDERLINE,
  MODIFY_ORDERLINE,
  RESET_ORDERLINEARRAY,
} from './actions.js';

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
      return {
        ...state,
        orderLineArray: [...state.orderLineArray, action.orderLine],
      };
    }
    case DELETE_ORDERLINE: {
      return {
        ...state,
        orderLineArray: state.orderLineArray.filter(
          (orderLine, orderLineIndex) =>
            orderLineIndex !== action.orderLineIndex,
        ),
      };
    }
    case MODIFY_ORDERLINE: {
      return {
        ...state,
        orderLineArray: state.orderLineArray.map(
          (orderLine, orderLineIndex) => {
            if (orderLineIndex !== action.modifiedOrderLineIndex) {
              return orderLine;
            }
            return {
              ...orderLine,
              ...action.orderLine,
            };
          },
        ),
      };
    }
    case RESET_ORDERLINEARRAY: {
      return {
        ...state,
        orderLineArray: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
