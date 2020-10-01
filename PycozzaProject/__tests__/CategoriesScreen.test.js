import React from 'react';
import { shallow, mount } from 'enzyme'
import CategoriesScreen from '../app/views/Home/Home.screen';
import string from '../app/resources/strings';

describe('Categories screen Test', () => {
    it('should render snapshot test for categories', () => {
        const wrapper = mount(<CategoriesScreen />)
        expect(wrapper).toMatchSnapshot();
    })
    
}
)