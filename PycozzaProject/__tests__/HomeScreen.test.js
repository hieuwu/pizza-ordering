import React from 'react';
import { shallow, mount } from 'enzyme'
import HomeScreen from '../app/views/Home/Home.screen';
import string from '../app/resources/strings'
beforeAll(() => {
    jest.mock('@react-native-community/async-storage');
    
})

describe('Homepage Test', () => {
    it('should render snapshot test for homepage', () => {
        const homepage = mount(<HomeScreen />)
        expect(homepage).toMatchSnapshot();
    })

    it('should navigate to main', () => {
        let props = {
            navigation: {
                navigate: jest.fn(),
            }
        }
        const wrapper = mount(<HomeScreen {...props} />)
        const button = wrapper.findWhere(node => {
            return (
                node.text() === "Start order    >" &&
                typeof node.type() === 'string'
            );
        });
        button.at(1).simulate('click');
        expect(props.navigation.navigate).toBeCalledWith('Main');
    })
}
)