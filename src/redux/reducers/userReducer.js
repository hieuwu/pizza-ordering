import {} from '../actions/index';
import {ADD_USER, REMOVE_USER} from '../actions/type';

const initialState = {
  userToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.state;
    case REMOVE_USER:
      return {
        userToken: null,
      };
    default:
      return state;
  }
};
