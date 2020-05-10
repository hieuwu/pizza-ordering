import React from 'react';
import {shallow, mount} from 'enzyme';

import MyCart from '../MyCart.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('MyCart Test', () => {
  it('should render snapshot test for MyCart', () => {
    const snap = shallow(
      <Provider store={store}>
        <MyCart />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
