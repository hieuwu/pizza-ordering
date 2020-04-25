import {SET_CATEGORYDATA, SET_PIZZADATA, SET_ISLOADING} from './actions.js';

const initState = {
  isLoading: true,
  categoryData: [],
  pizzaData: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORYDATA: {
      return {...state, categoryData: action.data};
    }
    case SET_PIZZADATA: {
      return {...state, pizzaData: action.data};
    }
    case SET_ISLOADING: {
      return {...state, isLoading: action.bool};
    }
    default:
      return state;
  }
};

export default reducer;
