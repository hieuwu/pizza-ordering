import {SET_CATEGORYDATA, SET_ISLOADING} from './actions.js';

const initState = {
  isLoading: true,
  categoryData: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORYDATA: {
      return {...state, categoryData: action.data};
    }
    case SET_ISLOADING: {
      return {...state, isLoading: action.bool};
    }
    default:
      return state;
  }
};

export default reducer;
