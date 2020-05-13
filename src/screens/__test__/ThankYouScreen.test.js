import React from 'react';
import {shallow, mount} from 'enzyme';

import ThankYouScreen from './../ThankYouScreen.js';

describe('Thank You Screen Test', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  it('should render snapshot test for home screen', () => {
    const wrapper = mount(<ThankYouScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to Category Screen', () => {
    let props = {navigation: {navigate: jest.fn()}};
    const wrapper = mount(<ThankYouScreen {...props} />);
    wrapper.find('TouchableOpacity').simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Home Screen');
  });
});
