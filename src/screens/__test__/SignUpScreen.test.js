import React from 'react';
import { shallow, mount } from 'enzyme'

import SignUpScreen from './../SignUpScreen.js';

describe('sign up screen test', () => {
    const origConsole = console.error;
    beforeEach(() => {
      console.error = () => {};
    });
    afterEach(() => {
      console.error = origConsole;
    });

    let wrapper, props, instance

    beforeEach(()=>{
        props = {navigation: {goBack: jest.fn()}}
        wrapper = mount(<SignUpScreen {...props}/>)
        instance = wrapper.instance()
    })

    it('should render snapshot test for sign up screen', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should sign up with valid phone, password, name and address', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '123456789abc',
            confirmPassword: '123456789abc',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        const spy=jest.spyOn(instance, 'SignUp')
        instance.forceUpdate(); //call forceUpdate to attach the spy function to the instance

        signUpButton.at(0).simulate('click')
        expect(spy).toBeCalled()
    })

    it('should alert if phone is empty', () => {
        wrapper.setState({ 
            phone: '',
            password: '123456789abc',
            confirmPassword: '123456789abc',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Phone is required')
    })

    it('should alert if phone is invalid', () => {
        wrapper.setState({ 
            phone: '123456789',
            password: '123456789abc',
            confirmPassword: '123456789abc',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Please enter a valid phone number')
    })

    it('should alert if password is empty', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '',
            confirmPassword: '',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Password is required')
    })

    it('should alert if password length is not between 6 and 20', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '12a',
            confirmPassword: '',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Password length must be between 6 and 20')
    })

    it('should alert if password is not contain number and character', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '1234567',
            confirmPassword: '1234567',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Password must contain number and character')
    })

    it('should alert if confirm password is not same as password', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '1234567a',
            confirmPassword: '1234567ab',
            name: 'John Doe',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Confirm password and password must be the same')
    })

    it('should alert if name is empty', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '123456789abc',
            confirmPassword: '123456789abc',
            name: '',
            address: '247 Pasteur St.',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Name is required')
    })

    it('should alert if address is empty', () => {
        wrapper.setState({ 
            phone: '09755516009',
            password: '123456789abc',
            confirmPassword: '123456789abc',
            name: 'John Doe',
            address: '',
        });

        const signUpButton=wrapper.findWhere(node => {
          return (
            node.text() === 'Sign up' &&
            typeof node.type() === 'string'
          );
        });

        window.alert = jest.fn();
        signUpButton.at(0).simulate('click')
        expect(window.alert).toBeCalledWith('Addess is required')
    })
})
