import reducer from './../reducer.js';
import {
  SET_CATEGORYDATA,
  SET_USERTOKEN,
  ADD_TOCART,
  DELETE_ORDERLINE,
  MODIFY_ORDERLINE,
  RESET_ORDERLINEARRAY,
} from './../actions.js';

const initState = {
  categoryData: [],
  orderLineArray: [],
  userToken: null,
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle SET_CATEGORYDATA', () => {
    expect(
      reducer(initState, {
        type: SET_CATEGORYDATA,
        data: ['mockData'],
      }),
    ).toEqual({
      categoryData: ['mockData'],
      orderLineArray: [],
      userToken: null,
    });
  });

  it('should handle SET_USERTOKEN', () => {
    expect(
      reducer(initState, {
        type: SET_USERTOKEN,
        userToken: 'mockData',
      }),
    ).toEqual({
      categoryData: [],
      orderLineArray: [],
      userToken: 'mockData',
    });
  });

  it('should handle ADD_TOCART', () => {
    expect(
      reducer(initState, {
        type: ADD_TOCART,
        orderLine: {data: 'mockData'},
      }),
    ).toEqual({
      categoryData: [],
      orderLineArray: [{data: 'mockData'}],
      userToken: null,
    });
  });

  it('should handle DELETE_ORDERLINE', () => {
    expect(
      reducer(
        {
          categoryData: [],
          orderLineArray: [{data: 'mockData'}],
          userToken: null,
        },
        {
          type: DELETE_ORDERLINE,
          orderLineIndex: 0,
        },
      ),
    ).toEqual({
      categoryData: [],
      orderLineArray: [],
      userToken: null,
    });
  });

  it('should handle MODIFY_ORDERLINE', () => {
    expect(
      reducer(
        {
          categoryData: [],
          orderLineArray: [{data: 'mockData'}],
          userToken: null,
        },
        {
          type: MODIFY_ORDERLINE,
          orderLine: {data: 'newMockData'},
          modifiedOrderLineIndex: 0,
        },
      ),
    ).toEqual({
      categoryData: [],
      orderLineArray: [{data: 'newMockData'}],
      userToken: null,
    });
  });

  it('should handle RESET_ORDERLINEARRAY', () => {
    expect(
      reducer(
        {
          categoryData: [],
          orderLineArray: [{data: 'mockData'}, {data2: 'mockData2'}],
          userToken: null,
        },
        {
          type: RESET_ORDERLINEARRAY,
        },
      ),
    ).toEqual({
      categoryData: [],
      orderLineArray: [],
      userToken: null,
    });
  });
});
