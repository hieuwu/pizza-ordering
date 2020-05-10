import React from 'react';
import {shallow, mount} from 'enzyme';

import ProductMenu from '../ProductMenu.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('ProductMenu Test', () => {
  it('should render snapshot test for ProductMenu', () => {
    const snap = shallow(
      <Provider store={store}>
        <ProductMenu />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
