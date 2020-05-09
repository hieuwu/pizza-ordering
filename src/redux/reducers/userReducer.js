import {SET_USER_TOKEN} from '../actions/type';

const initialState = {
  userToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {...state, userToken: action.userToken};
    default:
      return state;
  }
};

export default userReducer;
