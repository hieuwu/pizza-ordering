import React from 'react';
import { shallow, mount } from 'enzyme'
import LoginScreen from '../app/views/Login/Login.screen';
import string from '../app/resources/strings';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Login screen Test', () => {
    it('should render snapshot test for login screen', () => {
        const wrapper = mount(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })
}
)