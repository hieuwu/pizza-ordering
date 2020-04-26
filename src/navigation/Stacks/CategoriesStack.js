import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// import Welcome from '../modules/view/Welcome/Welcome.screen';
import CategoriesScreen from '../../modules/view/Categories/Categories.screen';
import MyCart from '../../modules/view/Cart/MyCart.screen';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="cart" component={MyCart} />
      </Stack.Navigator>
    );
  }
}
