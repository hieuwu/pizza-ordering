import React from 'react';
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";

import ProductDetailScreen from './../ProductDetailScreen.js';

mockData={
    '_id': '5e9e969745787b2cc452754f',
    'title': 'Marinara Seafood Spaghetti',
    'description': 'Shrimps, squid rings, capsicum, onions in Bolognese sauce',
    'price': 11,
    'rate': 4.5,
    'imageUrl': 'https://order.pizzahut.vn/menu/v000001/hk/en/images/FA18.png',
    'category': '5e9e969745787b2cc452752f',
}

describe('product detail screen test', () => {
    const origConsole = console.error;
    beforeEach(() => {
      console.error = () => {};
    });
    afterEach(() => {
      console.error = origConsole;
    });

    const initState={
        userToken: null,
    }

    const mockStore = configureStore()   
    let wrapper, props, instance


    beforeEach(()=>{
        props = {
            navigation: {goBack: jest.fn()},
            route: {params: {item: mockData}},
        }
        store=mockStore(initState)
        wrapper = mount(
            <Provider store={store}>
                <ProductDetailScreen {...props}/>
            </Provider>
        )
        instance = wrapper.instance()
    })

    it('should render snapshot test for product detail screen', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should go back', () => {
        const backIcon=wrapper.findWhere(node => {
          return (
            node.props().name === 'angle-left'
          );
        });
        backIcon.simulate('click')
        expect(props.navigation.goBack).toBeCalled()
    })

    it('should open order panel', () => {
        const orderNowButton=wrapper.findWhere(node => {
          return (
            node.text() === 'ORDER NOW' &&
            typeof node.type() === 'string'
          );
        });
        orderNowButton.at(0).simulate('click')
        expect(wrapper.find('ProductDetailScreen').state().isOpenOrderPanel).toEqual(true)
    })

    
})