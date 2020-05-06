import React from 'react';
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";

import CheckOutScreen from './../CheckOutScreen.js';

describe('check out screen test', () => {
    const origConsole = console.error;
    beforeEach(() => {
      console.error = () => {};
    });
    afterEach(() => {
      console.error = origConsole;
    });

    const initState={
        userToken: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWFkNTNkM2NmMjNkNTA2NmNkMDM3MzciLCJpYXQiOjE1ODg2NzA3NDAsImV4cCI6MTU4ODY3Nzk0MH0.BDS3jpilYi_3R3QmRL-965y-3XqNHVZDr5LH9yAJg9k",
            "user": {"_id": "5ead53d3cf23d5066cd03737", 
            "address": "76 duong 10", "name": "Tuan Anh", 
            "phone": "0912345678"}
        },
    }
    const mockStore = configureStore()   
    let store, wrapper, props, instance

    beforeEach(()=>{
        props = {
            navigation: {navigate: jest.fn()},
            route: {params: {totalPrice: 100}},
        }
        store=mockStore(initState)
        wrapper = mount(
            <Provider store={store}>
                <CheckOutScreen {...props}/>
            </Provider>
        )
        instance = wrapper.find('CheckOutScreen').instance()
    })

    it('should render snapshot test for check out screen', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should navigate to confirm screen', () => {
        wrapper.find('CheckOutScreen').setState({ 
            name: 'John Doe',
            phone: '09755516009',
            address: '247 Pasteur St.',
            note: '',
            paymentMethod: 'COD',        
        });

        const continueButton=wrapper.findWhere(node => {
          return (
            node.text() === 'CONTINUE' &&
            typeof node.type() === 'string'
          );
        });

        const spy=jest.spyOn(instance, 'navigateToConfirmScreen')
        instance.forceUpdate(); //call forceUpdate to attach the spy function to the instance

        continueButton.at(0).simulate('click')
        expect(spy).toBeCalled()
    })

    it('should alert if payment method have not been picked', () => {
        wrapper.find('CheckOutScreen').setState({ 
            name: 'John Doe',
            phone: '09755516009',
            address: '247 Pasteur St.',
            note: '',
            paymentMethod: '',        
        });

        const continueButton=wrapper.findWhere(node => {
          return (
            node.text() === 'CONTINUE' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        continueButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Please pick payment method!')
    })

    it('should alert if name is empty', () => {
        wrapper.find('CheckOutScreen').setState({ 
            name: '',
            phone: '09755516009',
            address: '247 Pasteur St.',
            note: '',
            paymentMethod: 'COD',        
        });

        const continueButton=wrapper.findWhere(node => {
          return (
            node.text() === 'CONTINUE' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        continueButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Name is required')
    })

    it('should alert if phone is empty', () => {
        wrapper.find('CheckOutScreen').setState({ 
            name: 'John Doe',
            phone: '',
            address: '247 Pasteur St.',
            note: '',
            paymentMethod: 'COD',        
        });

        const continueButton=wrapper.findWhere(node => {
          return (
            node.text() === 'CONTINUE' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        continueButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Phone is required')
    })

    it('should alert if phone is invalid', () => {
        wrapper.find('CheckOutScreen').setState({ 
            name: 'John Doe',
            phone: '123456789',
            address: '247 Pasteur St.',
            note: '',
            paymentMethod: 'COD',        
        });

        const continueButton=wrapper.findWhere(node => {
          return (
            node.text() === 'CONTINUE' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        continueButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Please enter a valid phone number')
    })

    it('should alert if address is empty', () => {
        wrapper.find('CheckOutScreen').setState({ 
            name: 'John Doe',
            phone: '09755516009',
            address: '',
            note: '',
            paymentMethod: 'COD',        
        });

        const continueButton=wrapper.findWhere(node => {
          return (
            node.text() === 'CONTINUE' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        continueButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Address is required')
    })

})