import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import MyCart from '../../modules/view/Cart/MyCart.screen';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="cart">
        <Stack.Screen name="cart" component={MyCart} />
      </Stack.Navigator>
    );
  }
}
