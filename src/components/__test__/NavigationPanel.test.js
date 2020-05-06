import React from 'react';
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";

import NavigationPanel from './../NavigationPanel.js';

describe('navigation panel test with user log in', () => {
    const origConsole = console.error;
    beforeEach(() => {
      console.error = () => {};
    });
    afterEach(() => {
      console.error = origConsole;
    });

    const initState={
        categoryData:[
          {
            "_id": "5ead5095e469de1464606a63",
            "title": "Pizza",
            "imageUrl": "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-the-pizza-company-royal-city-1-normal-1320212618915.jpg"
          },
          {
            "_id": "5ead5095e469de1464606a64",
            "title": "Pasta",
            "imageUrl": "https://chefjob.vn/images/tin-tuc/nha-hang-khach-san/nhieu-loai-pasta-khac-nhau.jpg"
          },
        ],
        orderLineArray: [],
        userToken: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWFkNTNkM2NmMjNkNTA2NmNkMDM3MzciLCJpYXQiOjE1ODg2NzA3NDAsImV4cCI6MTU4ODY3Nzk0MH0.BDS3jpilYi_3R3QmRL-965y-3XqNHVZDr5LH9yAJg9k",
            "user": {"_id": "5ead53d3cf23d5066cd03737", 
            "address": "76 duong 10", "name": "Tuan Anh", 
            "phone": "0912345678"}
        },
    }
    const mockStore = configureStore()   
    let store, wrapper, props

    beforeEach(()=>{
        props = {
			modalVisible: true,
			onClose: jest.fn(),
			onClickHome: jest.fn(),
			onClickMenu: jest.fn(),
			onClickCart: jest.fn(),
			onClickLogIn: jest.fn(),
			onClickUser: jest.fn(),
			RequestClose: jest.fn(),
        }
        store=mockStore(initState)
        wrapper = mount(
            <Provider store={store}>
                <NavigationPanel {...props}/>
            </Provider>
        )
    })

    it('should render snapshot test for navigation panel with user log in', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should navigate to home screen', () => {
        const homeLine=wrapper.findWhere(node => {
          return (
            node.text() === "Home" &&
            typeof node.type() === 'string'
          );
        });
        homeLine.simulate('click')
        expect(props.onClickHome).toBeCalled()
    })
    
    it('should navigate to cart screen', () => {
        const cartLine=wrapper.findWhere(node => {
          return (
            node.text() === "Your Cart" &&
            typeof node.type() === 'string'
          );
        });
        cartLine.simulate('click')
        expect(props.onClickCart).toBeCalled()
    })

    it('should navigate to user profile screen', () => {
        const welcomeLine=wrapper.findWhere(node => {
          return (
            node.text() === `Welcome \nTuan Anh` &&
            typeof node.type() === 'string'
          );
        });
        welcomeLine.at(0).simulate('click')
        expect(props.onClickUser).toBeCalled()
    })

    it('should navigate to corresponding product list screen', () => {
        const menuLine=wrapper.findWhere(node => {
          return (
            node.text() === 'Menu' &&
            typeof node.type() === 'string'
          );
        });
        menuLine.simulate('click')

        const categoryLine=wrapper.findWhere(node => {
          return (
            node.text() === 'Pizza' &&
            typeof node.type() === 'string'
          );
        });
        categoryLine.at(1).simulate('click')
        expect(props.onClickMenu).toBeCalled()
    })

    it('should call LogOut function', () => {
        const logOutLine=wrapper.findWhere(node => {
          return (
            node.text() === 'Log Out' &&
            typeof node.type() === 'string'
          );
        });
        
        const instance = wrapper.find('NavigationPanel').instance()
        const spy=jest.spyOn(instance, 'LogOut')
        instance.forceUpdate(); //call forceUpdate to attach the spy function to the instance

        logOutLine.simulate('click')

        expect(spy).toBeCalled()
    })
})