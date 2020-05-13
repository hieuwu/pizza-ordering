import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import CategoryScreen from './../CategoryScreen.js';

describe('category screen test without user log in', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  const initState = {
    categoryData: [
      {
        _id: '5ead5095e469de1464606a63',
        title: 'Pizza',
        imageUrl:
          'https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-the-pizza-company-royal-city-1-normal-1320212618915.jpg',
      },
      {
        _id: '5ead5095e469de1464606a64',
        title: 'Pasta',
        imageUrl:
          'https://chefjob.vn/images/tin-tuc/nha-hang-khach-san/nhieu-loai-pasta-khac-nhau.jpg',
      },
    ],
    orderLineArray: [],
    userToken: null,
  };
  const mockStore = configureStore();
  let store, wrapper, props;

  beforeEach(() => {
    props = {navigation: {navigate: jest.fn()}};
    store = mockStore(initState);
    wrapper = mount(
      <Provider store={store}>
        <CategoryScreen {...props} />
      </Provider>,
    );
  });

  it('should render snapshot test for category screen without user log in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show category images', () => {
    const pizzaImage = wrapper.find('ImageBackground').at(0);
    const pastaImage = wrapper.find('ImageBackground').at(1);
    expect(pizzaImage.prop('source')).toEqual({
      uri: initState.categoryData[0].imageUrl,
    });
    expect(pastaImage.prop('source')).toEqual({
      uri: initState.categoryData[1].imageUrl,
    });
  });

  it('should navigate to corresponding product list screen when click on image', () => {
    const pizzaImage = wrapper.find('ImageBackground').at(0);
    const pastaImage = wrapper.find('ImageBackground').at(1);
    pizzaImage.simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Product List Screen', {
      CategoryId: initState.categoryData[0]._id,
      CategoryTitle: initState.categoryData[0].title,
    });
    pastaImage.simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Product List Screen', {
      CategoryId: initState.categoryData[1]._id,
      CategoryTitle: initState.categoryData[1].title,
    });
  });

  it('should navigate to cart screen when click on cart icon', () => {
    const cartIcon = wrapper.find('CartIcon');
    cartIcon.simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Cart Screen');
  });

  it('should show navigation panel', () => {
    const barsIcon = wrapper.find('BarsIcon');
    const mockCategoryScreen = wrapper.find('CategoryScreen');
    barsIcon.simulate('click');
    expect(mockCategoryScreen.state().isOpenPanel).toEqual(true);
    const navigationPanel = wrapper.find('NavigationPanel');
    expect(navigationPanel.props().modalVisible).toEqual(true);
  });

  it('should navigate to home screen', () => {
    const homeLine = wrapper.findWhere(node => {
      return node.text() === 'Home' && typeof node.type() === 'string';
    });
    homeLine.simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Home Screen');
  });

  it('should navigate to cart screen when click on cart line', () => {
    const cartLine = wrapper.findWhere(node => {
      return node.text() === 'Your Cart' && typeof node.type() === 'string';
    });
    cartLine.simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Cart Screen');
  });

  it('should navigate to log in screen when click on log in line', () => {
    const logInLine = wrapper.findWhere(node => {
      return node.text() === 'Log In' && typeof node.type() === 'string';
    });
    logInLine.simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('Log In Screen');
  });
});

describe('category screen test with user log in', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  const initState = {
    categoryData: [
      {
        _id: '5ead5095e469de1464606a63',
        title: 'Pizza',
        imageUrl:
          'https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-the-pizza-company-royal-city-1-normal-1320212618915.jpg',
      },
      {
        _id: '5ead5095e469de1464606a64',
        title: 'Pasta',
        imageUrl:
          'https://chefjob.vn/images/tin-tuc/nha-hang-khach-san/nhieu-loai-pasta-khac-nhau.jpg',
      },
    ],
    orderLineArray: [],
    userToken: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWFkNTNkM2NmMjNkNTA2NmNkMDM3MzciLCJpYXQiOjE1ODg2NzA3NDAsImV4cCI6MTU4ODY3Nzk0MH0.BDS3jpilYi_3R3QmRL-965y-3XqNHVZDr5LH9yAJg9k',
      user: {
        _id: '5ead53d3cf23d5066cd03737',
        address: '76 duong 10',
        name: 'Tuan Anh',
        phone: '0912345678',
      },
    },
  };
  const mockStore = configureStore();
  let store, wrapper, props;

  beforeEach(() => {
    props = {navigation: {navigate: jest.fn()}};
    store = mockStore(initState);
    wrapper = mount(
      <Provider store={store}>
        <CategoryScreen {...props} />
      </Provider>,
    );
  });

  it('should render snapshot test for category screen with user log in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to user profile screen when click on welcome line', () => {
    const welcomeLine = wrapper.findWhere(node => {
      return (
        node.text() === 'Welcome \nTuan Anh' && typeof node.type() === 'string'
      );
    });
    welcomeLine.at(0).simulate('click');
    expect(props.navigation.navigate).toBeCalledWith('User Profile Screen');
  });
});
