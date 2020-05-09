import React from 'react';
import { shallow, mount } from 'enzyme'
import CartScreen from '../app/views/Cart/Cart.screen';
import string from '../app/resources/strings';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Cart screen Test', () => {
    it('should render snapshot test for cart screen', () => {
        const wrapper = mount(
            <Provider store={store}>
                <CartScreen />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })
}
)