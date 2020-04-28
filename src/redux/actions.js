export const SET_CATEGORYDATA = 'SET_CATEGORYDATA';
export const SET_USERTOKEN = 'SET_USERTOKEN';
export const ADD_TOCART = 'ADD_TOCART';


export const setCategoryData = data => {
  return {
    type: SET_CATEGORYDATA,
    data,
  };
};

export const setUserToken = userToken => ({
    type: SET_USERTOKEN,
    userToken,
});

export const addToCart = orderLine => {
  return {
    type: ADD_TOCART,
    orderLine,
  };
};
