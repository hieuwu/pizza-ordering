import React from 'react';
import {shallow, mount} from 'enzyme';

import Shipping from '../Shipping.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Shipping Test', () => {
  it('should render snapshot test for Shipping', () => {
    const snap = shallow(
      <Provider store={store}>
        <Shipping />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
