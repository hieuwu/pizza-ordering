import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import ProductDetailScreen from './../ProductDetailScreen.js';

mockOrderLineArray = [
  {
    oldState: {
      crust: 'Thick Crust',
      quantity: '3',
      size: 'Size L',
      topping: [Array],
    },
    optionArray: [
      '5ead5095e469de1464606a8d',
      '5ead5095e469de1464606a99',
      '5ead5097e469de1464606aa7',
      '5ead5097e469de1464606aa8',
    ],
    optionTitleArray: ['Size L', 'Thick Crust', 'Sausage', 'Shrimp'],
    product: '5ead5095e469de1464606a6c',
    productData: {
      _id: '5ead5095e469de1464606a6c',
      category: '5ead5095e469de1464606a63',
      description:
        'Shrimps, squid rings and mushroom on a bed of Pesto sauce, topped with Mozzarella cheese and parsley.',
      imageUrl: 'https://order.pizzahut.vn/menu/v000001/hk/en/images/C02.png',
      price: 12,
      rate: 5,
      title: 'Seafood Pesto',
    },
    productPrice: 57,
    quantity: 3,
  },
  {
    oldState: {
      crust: 'Thick Crust',
      quantity: '1',
      size: 'Size L',
      topping: [Array],
    },
    optionArray: ['5ead5095e469de1464606a8f', '5ead5095e469de1464606a9b'],
    optionTitleArray: ['Size L', 'Thick Crust'],
    product: '5ead5095e469de1464606a6d',
    productData: {
      _id: '5ead5095e469de1464606a6d',
      category: '5ead5095e469de1464606a63',
      description:
        'Squid, crab stick, pineapple, green pepper, onion, Cheesy mayo sauce and mozzarella',
      imageUrl: 'https://order.pizzahut.vn/menu/v000001/hk/en/images/C07.png',
      price: 8,
      rate: 2.6,
      title: 'Ocean Delight',
    },
    productPrice: 12,
    quantity: 1,
  },
  {
    oldState: {crust: '', quantity: '2', size: '', topping: [Array]},
    optionArray: [],
    optionTitleArray: [],
    product: '5ead5095e469de1464606a73',
    productData: {
      _id: '5ead5095e469de1464606a73',
      category: '5ead5095e469de1464606a64',
      description:
        'Diced blackened chicken breast, sautéed with bell peppers and red onions, tossed with a spicy cajun cream sauce and penne pasta.',
      imageUrl:
        'https://prestopasta.com/wordpress/wp-content/uploads/2015/06/Cajun-Pasta1-100x100.jpg',
      price: 6,
      rate: 3.5,
      title: 'Cajun Chicken Penne',
    },
    productPrice: 12,
    quantity: 2,
  },
  {
    oldState: {crust: '', quantity: '1', size: '', topping: [Array]},
    optionArray: [],
    optionTitleArray: [],
    product: '5ead5095e469de1464606a7f',
    productData: {
      _id: '5ead5095e469de1464606a7f',
      category: '5ead5095e469de1464606a67',
      description: '',
      imageUrl: 'https://thepizzacompany.vn/273-home_default/quesadillas.jpg',
      price: 1,
      rate: 4.5,
      title: 'Aquafina',
    },
    productPrice: 1,
    quantity: 1,
  },
  {
    oldState: {crust: '', quantity: '2', size: '', topping: [Array]},
    optionArray: [],
    optionTitleArray: [],
    product: '5ead5095e469de1464606a75',
    productData: {
      _id: '5ead5095e469de1464606a75',
      category: '5ead5095e469de1464606a65',
      description: 'Signature salad of our store',
      imageUrl:
        'https://thepizzacompany.vn/174-home_default/garden-salad-with-balsamic-vinegar-dressing.jpg',
      price: 5,
      rate: 2.8,
      title: 'Signature salad',
    },
    productPrice: 10,
    quantity: 2,
  },
  {
    oldState: {crust: '', quantity: '10', size: '', topping: [Array]},
    optionArray: [],
    optionTitleArray: [],
    product: '5ead5095e469de1464606a78',
    productData: {
      _id: '5ead5095e469de1464606a78',
      category: '5ead5095e469de1464606a66',
      description: '',
      imageUrl:
        'https://www.tljus.com/wp-content/uploads/2019/12/fresh-cream-cake1-11.jpg',
      price: 4,
      rate: 1.4,
      title: 'Triple Delight Coffee Cake',
    },
    productPrice: 40,
    quantity: 10,
  },
];
mockData = {
  _id: '5e9e969745787b2cc452754f',
  title: 'Marinara Seafood Spaghetti',
  description: 'Shrimps, squid rings, capsicum, onions in Bolognese sauce',
  price: 11,
  rate: 4.5,
  imageUrl: 'https://order.pizzahut.vn/menu/v000001/hk/en/images/FA18.png',
  category: '5e9e969745787b2cc452752f',
};

describe('product detail screen test', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  const initState = {
    orderLineArray: mockOrderLineArray,
    userToken: null,
  };

  const mockStore = configureStore();
  let wrapper, props, instance;

  beforeEach(() => {
    props = {
      navigation: {goBack: jest.fn()},
      route: {params: {item: mockData}},
    };
    store = mockStore(initState);
    wrapper = mount(
      <Provider store={store}>
        <ProductDetailScreen {...props} />
      </Provider>,
    );
    instance = wrapper.instance();
  });

  it('should render snapshot test for product detail screen', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should go back', () => {
    const backIcon = wrapper.findWhere(node => {
      return node.props().name === 'angle-left';
    });
    backIcon.simulate('click');
    expect(props.navigation.goBack).toBeCalled();
  });

  it('should open order panel', () => {
    const orderNowButton = wrapper.findWhere(node => {
      return node.text() === 'ORDER NOW' && typeof node.type() === 'string';
    });
    orderNowButton.at(0).simulate('click');
    expect(
      wrapper.find('ProductDetailScreen').state().isOpenOrderPanel,
    ).toEqual(true);
  });
});
