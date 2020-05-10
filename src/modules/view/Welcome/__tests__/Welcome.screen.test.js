import React from 'react';
import {mount, shallow} from 'enzyme';

import Welcome from '../Welcome.Screen';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Welcome screen test', () => {
  const wrapper = shallow(<Welcome />);

  it('should render snapshot test for Welcome', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate categories screen', function() {
    const props = {navigation: {navigate: jest.fn()}};
    const wrapper = mount(<Welcome {...props} />);
    const btnStartOrder = wrapper.findWhere(node => {
      return node.text() === 'START ORDER >' && typeof node.type() === 'string';
    });
    btnStartOrder.at(1).simulate('click');

    expect(props.navigation.navigate).toBeCalledWith('MainDrawer');
  });
});
