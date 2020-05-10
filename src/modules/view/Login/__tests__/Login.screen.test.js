import React from 'react';
import {shallow, mount} from 'enzyme';

import Login from '../Login.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Login Test', () => {
  it('should render snapshot test for Login', () => {
    const snap = shallow(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
