import React from 'react';
import { shallow, mount } from 'enzyme'
import ProfileScreen from '../app/views/Profile/Profile.screen';
import string from '../app/resources/strings';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Profile screen Test', () => {
    it('should render snapshot test for profile screen', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ProfileScreen />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })
}
)