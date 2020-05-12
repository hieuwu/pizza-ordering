export const SET_CATEGORYDATA = 'SET_CATEGORYDATA';
export const SET_USERTOKEN = 'SET_USERTOKEN';
export const ADD_TOCART = 'ADD_TOCART';
export const DELETE_ORDERLINE = 'DELETE_ORDERLINE';
export const MODIFY_ORDERLINE = 'MODIFY_ORDERLINE';
export const RESET_ORDERLINEARRAY = 'RESET_ORDERLINEARRAY';

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

export const deleteOrderLine = orderLineIndex => {
  return {
    type: DELETE_ORDERLINE,
    orderLineIndex,
  };
};

export const modifyOrderLine = (orderLine, modifiedOrderLineIndex) => {
  return {
    type: MODIFY_ORDERLINE,
    orderLine,
    modifiedOrderLineIndex,
  };
};

export const resetOrderLineArray = () => {
  return {
    type: RESET_ORDERLINEARRAY,
  };
};
