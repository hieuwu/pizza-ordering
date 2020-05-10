import React from 'react';
import {shallow, mount} from 'enzyme';

import SignUp from '../SignUp.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Sign up screen test', () => {
  const componentShallow = shallow(
    <Provider store={store}>
      <SignUp />
    </Provider>,
  );

  it('should render snapshot test for Sign up', () => {
    expect(componentShallow).toMatchSnapshot();
  });
});
