import {
  SET_CATEGORYDATA,
  SET_USERTOKEN,
  ADD_TOCART,
  DELETE_ORDERLINE,
  MODIFY_ORDERLINE,
  RESET_ORDERLINEARRAY,
} from './../actions.js';
import {
  setCategoryData,
  setUserToken,
  addToCart,
  deleteOrderLine,
  modifyOrderLine,
  resetOrderLineArray,
} from './../actions.js';

describe('actions', () => {
  it('should create an action to set category data', () => {
    const data = 'mockData';
    const expectedAction = {
      type: SET_CATEGORYDATA,
      data,
    };
    expect(setCategoryData(data)).toEqual(expectedAction);
  });

  it('should create an action to set user token', () => {
    const userToken = 'mockData';
    const expectedAction = {
      type: SET_USERTOKEN,
      userToken,
    };
    expect(setUserToken(userToken)).toEqual(expectedAction);
  });

  it('should create an action to add order line to cart', () => {
    const orderLine = 'mockData';
    const expectedAction = {
      type: ADD_TOCART,
      orderLine,
    };
    expect(addToCart(orderLine)).toEqual(expectedAction);
  });

  it('should create an action to delete order line', () => {
    const orderLineIndex = 'mockData';
    const expectedAction = {
      type: DELETE_ORDERLINE,
      orderLineIndex,
    };
    expect(deleteOrderLine(orderLineIndex)).toEqual(expectedAction);
  });

  it('should create an action to modify order line', () => {
    const orderLine = 'mockData';
    const modifiedOrderLineIndex = 'mockData';
    const expectedAction = {
      type: MODIFY_ORDERLINE,
      orderLine,
      modifiedOrderLineIndex,
    };
    expect(modifyOrderLine(orderLine, modifiedOrderLineIndex)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to reset order line array', () => {
    const expectedAction = {
      type: RESET_ORDERLINEARRAY,
    };
    expect(resetOrderLineArray()).toEqual(expectedAction);
  });
});
