import React from 'react';
import {shallow, mount} from 'enzyme';

import Categories from '../Categories.screen';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Categories Test', () => {
  it('should render snapshot test for Categories', () => {
    const snap = shallow(
      <Provider store={store}>
        <Categories />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
