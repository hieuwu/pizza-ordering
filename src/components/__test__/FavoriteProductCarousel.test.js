import React from 'react';
import { shallow, mount } from 'enzyme'
import { Provider } from "react-redux";

import {FavoriteProductCarousel} from './../FavoriteProductCarousel.js';

mockData=[
	{
		'_id': '5e9e969745787b2cc452754f',
		'title': 'Marinara Seafood Spaghetti',
		'description': 'Shrimps, squid rings, capsicum, onions in Bolognese sauce',
		'price': 11,
		'rate': 4.5,
		'imageUrl': 'https://order.pizzahut.vn/menu/v000001/hk/en/images/FA18.png',
		'category': '5e9e969745787b2cc452752f',
	},
	{
		'_id': '5e9e969745787b2cc452754a',
		'title': 'Super Supreme',
		'description': 'Shrimps, squid rings, capsicum, onions in Bolognese sauce',
		'price': 10,
		'rate': 4,
		'imageUrl': 'https://order.pizzahut.vn/menu/v000001/hk/en/images/FA18.png',
		'category': '5e9e969745787b2cc452752f',
	},
	{
		'_id': '5e9e969745787b2cc452754b',
		'title': 'Pizza 4 cheese',
		'description': 'Shrimps, squid rings, capsicum, onions in Bolognese sauce',
		'price': 9,
		'rate': 3.5,
		'imageUrl': 'https://order.pizzahut.vn/menu/v000001/hk/en/images/FA18.png',
		'category': '5e9e969745787b2cc452752f',
	},
]

describe('favorite product carousel test', () => {
    const origConsole = console.error;
    beforeEach(() => {
      console.error = () => {};
    });
    afterEach(() => {
      console.error = origConsole;
    });

    let wrapper, props, instance

    beforeEach(()=>{
        props = {
			data: mockData,
		    onClickOrder: jest.fn(),
		    onClickImage: jest.fn(),
        }
        wrapper = mount(
                <FavoriteProductCarousel {...props}/>
        )
        instance = wrapper.instance()
    })

    it('should render snapshot test for favorite product carousel', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call function when click on image', () => {
        const productName=wrapper.findWhere(node => {
          return (
            node.text() === 'Marinara Seafood Spaghetti' &&
            typeof node.type() === 'string'
          );
        });

        productName.simulate('click')

        expect(props.onClickImage).toBeCalled()
    })

    it('should call function when click on order now button', () => {
        const orderNowButton=wrapper.findWhere(node => {
          return (
            node.text() === `ORDER\nNOW` &&
            typeof node.type() === 'string'
          );
        });

        orderNowButton.at(0).simulate('click')

        expect(props.onClickOrder).toBeCalledTimes(1)
    })
})