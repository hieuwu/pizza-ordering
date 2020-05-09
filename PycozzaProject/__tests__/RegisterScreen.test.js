import React from 'react';
import { mount } from 'enzyme'
import string from '../app/resources/strings';
import RegisterScreen from '../app/views/Register/Register.screen';
import UserUseCase from '../app/usecase/UserUseCase';
import { NativeModules } from 'react-native';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

beforeAll(() => {
    jest.mock('@react-native-community/async-storage');

})


describe('Register Screen Test', () => {
    it('should render snapshot test for register screen', () => {
        const wrapper = mount(
            <Provider store={store}>
                <RegisterScreen />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })
    it('should validate email', () => {
        let pattern = 'someone@gmail.com';
        let wrongEmail_1 = 'sfadf';
        let wrongEmail_2 = '';
        let wrongEmail_3 = '1123';
        let wrongEmail_4 = '#$@$';
        expect(new UserUseCase().isValidEmail(pattern)).toBe(true);
        expect(new UserUseCase().isValidEmail(wrongEmail_1)).toBe(false);
        expect(new UserUseCase().isValidEmail(wrongEmail_2)).toBe(false);
        expect(new UserUseCase().isValidEmail(wrongEmail_3)).toBe(false);
        expect(new UserUseCase().isValidEmail(wrongEmail_4)).toBe(false);
    })
    //Phone number has only 10 digits
    it('should validate phone number', () => {
        let pattern = '9999999999';
        let wrongPhone_1 = 0;
        let wrongPhone_2 = '';
        let wrongPhone_3 = '930234';
        let wrongPhone_4 = '8493023492348240';
        let wrongPhone_5 = 'qutyressfh'
        expect(new UserUseCase().isValidPhoneNumber(pattern)).toBe(true);
        expect(new UserUseCase().isValidPhoneNumber(wrongPhone_1)).toBe(false);
        expect(new UserUseCase().isValidPhoneNumber(wrongPhone_2)).toBe(false);
        expect(new UserUseCase().isValidPhoneNumber(wrongPhone_3)).toBe(false);
        expect(new UserUseCase().isValidPhoneNumber(wrongPhone_4)).toBe(false);
        expect(new UserUseCase().isValidPhoneNumber(wrongPhone_5)).toBe(false);
    })
    //Password length: 8-16
    it('should validate password', () => {
        let pattern = '43@9403H';
        let wrongCase_1 = '0';
        let wrongCase_2 = '';
        let wrongCase_3 = 'weuroiwerierorueori2weoiru934';
        expect(new UserUseCase().isValidPassword(pattern)).toBe(true);
        expect(new UserUseCase().isValidPassword(wrongCase_1)).toBe(false);
        expect(new UserUseCase().isValidPassword(wrongCase_2)).toBe(false);
        expect(new UserUseCase().isValidPassword(wrongCase_3)).toBe(false);
    })

    it('should validate confirm password', () => {
        let password = '43@9403H';
        let confirm = '43@9403H';
        expect(new UserUseCase().isValidConfirm(password, confirm)).toBe(true);
    })
})