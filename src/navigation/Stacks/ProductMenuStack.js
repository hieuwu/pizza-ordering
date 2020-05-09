import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ProductMenu from '../../modules/view/ProductMenu/ProductMenu.screen';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="spaghetti">
        <Stack.Screen name="spaghetti" component={(ProductMenu, {cartId: 4})} />
      </Stack.Navigator>
    );
  }
}
