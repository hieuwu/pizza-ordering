import React from 'react';
import {shallow, mount} from 'enzyme';

import ProductDetail from '../ProductDetail.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('ProductDetail Test', () => {
  it('should render snapshot test for ProductDetail', () => {
    const snap = shallow(
      <Provider store={store}>
        <ProductDetail />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
