import React from 'react';
import {shallow, mount} from 'enzyme';

import HomeScreen from './../HomeScreen.js';

describe('Home Screen Test', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  it('should render snapshot test for home screen', () => {
    const wrapper = mount(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to Category Screen', () => {
    let props = {navigation: {navigate: jest.fn()}};
    const wrapper = mount(<HomeScreen {...props} />);
    wrapper.find('TouchableOpacity').simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Category Screen');
  });
});
