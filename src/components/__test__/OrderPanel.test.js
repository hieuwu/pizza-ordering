import React from 'react';
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";

import OrderPanel from './../OrderPanel.js';

mockProductData={
    "_id": "5ead5095e469de1464606a6c", 
    "category": "5ead5095e469de1464606a63", 
    "description": "Shrimps, squid rings and ...", 
    "imageUrl": "https://order.pizzahut.vn/menu/v000001/hk/en/images/C02.png", 
    "price": 12, 
    "rate": 5, 
    "title": "Seafood Pesto"}
mockData=[
    {
        "_id": "5ead5095e469de1464606a8c", 
        "price": 0, 
        "product": "5ead5095e469de1464606a6c", 
        "title": "Size M", 
        "type": "Size"
    }, 
    {
        "_id": "5ead5095e469de1464606a8d", 
        "price": 2, 
        "product": "5ead5095e469de1464606a6c", 
        "title": "Size L", 
        "type": "Size"
    }, 
    {
        "_id": "5ead5095e469de1464606a98", 
        "price": 0, 
        "product": "5ead5095e469de1464606a6c", 
        "title": "Thin Crust", 
        "type": "Crust"
    }, 
    {
        "_id": "5ead5095e469de1464606a99", 
        "price": 2, 
        "product": "5ead5095e469de1464606a6c", 
        "title": "Thick Crust", 
        "type": "Crust"
    }, 
    {
        "_id": "5ead5097e469de1464606aa7", 
        "price": 1, 
        "product": "5ead5095e469de1464606a6c", 
        "title": "Sausage", 
        "type": "Topping"
    }, 
    {
        "_id": "5ead5097e469de1464606aa8", 
        "price": 2, 
        "product": "5ead5095e469de1464606a6c", 
        "title": "Shrimp", 
        "type": "Topping"
    }
]

describe('order panel test', () => {
    const origConsole = console.error;
    beforeEach(() => {
      console.error = () => {};
    });
    afterEach(() => {
      console.error = origConsole;
    });

    const initState={}
    const mockStore = configureStore()   
    let store, wrapper, props, instance

    beforeEach(()=>{
        props = {
			productData: mockProductData
        }
        store=mockStore(initState)
        wrapper = mount(
            <Provider store={store}>
                <OrderPanel {...props}/>
            </Provider>
        )
        instance = wrapper.find('OrderPanel').instance()
        instance.filterOptionByType(mockData)
    })

    it('should render snapshot test for order panel', () => {
        wrapper.find('OrderPanel').setState({ isLoading: false });
        expect(wrapper).toMatchSnapshot()
    })

    it('should calculate total price accurately', () => {
        wrapper.find('OrderPanel').setState({ 
            data: mockData, 
            isLoading: false, 
            size: 'Size L',
            crust: 'Thick Crust',
            topping: ['Shrimp', 'Sausage'],
            quantity: '3',
        });
        expect(instance.calculatePrice()).toEqual(57)      
    })

    it('should alert user to pick size', () => {
        wrapper.find('OrderPanel').setState({ 
            data: mockData, 
            isLoading: false, 
            size: '',
            crust: 'Thick Crust',
            topping: ['Shrimp', 'Sausage'],
            quantity: '3',
        });

        const addToCartButton=wrapper.findWhere(node => {
          return (
            node.text() === 'ADD TO CART' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        addToCartButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Please pick size')
    })

    it('should alert user to pick crust', () => {
        wrapper.find('OrderPanel').setState({ 
            data: mockData, 
            isLoading: false, 
            size: 'Size L',
            crust: '',
            topping: ['Shrimp', 'Sausage'],
            quantity: '3',
        });

        const addToCartButton=wrapper.findWhere(node => {
          return (
            node.text() === 'ADD TO CART' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        addToCartButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Please pick crust')
    })

    it('should set size when pick size', () => {
        wrapper.find('OrderPanel').setState({ isLoading: false });
        const sizeL=wrapper.findWhere(node => {
          return (
            node.text() === 'Size L' &&
            typeof node.type() === 'string'
          );
        });

        sizeL.simulate('click')

        expect(wrapper.find('OrderPanel').state().size).toEqual('Size L')
    })

    it('should set crust when pick crust', () => {
        wrapper.find('OrderPanel').setState({ isLoading: false });
        const thickCrust=wrapper.findWhere(node => {
          return (
            node.text() === 'Thick Crust' &&
            typeof node.type() === 'string'
          );
        });

        thickCrust.simulate('click')

        expect(wrapper.find('OrderPanel').state().crust).toEqual('Thick Crust')
    })

    it('should set topping when pick topping', () => {
        wrapper.find('OrderPanel').setState({ isLoading: false });
        const shrimp=wrapper.findWhere(node => {
          return (
            node.text() === 'Shrimp' &&
            typeof node.type() === 'string'
          );
        });
        const sausage=wrapper.findWhere(node => {
          return (
            node.text() === 'Sausage' &&
            typeof node.type() === 'string'
          );
        });

        shrimp.simulate('click')
        sausage.simulate('click')

        expect(wrapper.find('OrderPanel').state().topping).toEqual(['Shrimp', 'Sausage'])
    })

    it('should remove topping', () => {
        wrapper.find('OrderPanel').setState({ isLoading: false, topping: ['Shrimp', 'Sausage'] });
        const shrimp=wrapper.findWhere(node => {
          return (
            node.text() === 'Shrimp' &&
            typeof node.type() === 'string'
          );
        });

        shrimp.simulate('click')

        expect(wrapper.find('OrderPanel').state().topping).toEqual(['Sausage'])
    })

    it('should set the selected quantity to state (Android)', () => {
        wrapper.find('OrderPanel').setState({ isLoading: false });
        const picker = wrapper.find('RNPickerSelect')

        picker.props().onValueChange('3', 3);
        expect(wrapper.find('OrderPanel').state().quantity).toEqual('3')       
    });
})