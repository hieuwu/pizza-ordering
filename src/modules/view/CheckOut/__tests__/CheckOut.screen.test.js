import React from 'react';
import {shallow, mount} from 'enzyme';

import CheckOut from '../CheckOut.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('CheckOut Test', () => {
  it('should render snapshot test for CheckOut', () => {
    const snap = shallow(
      <Provider store={store}>
        <CheckOut />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
