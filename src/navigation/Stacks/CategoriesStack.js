import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../../modules/view/Categories/Categories.screen';
import MyCart from '../../modules/view/Cart/MyCart.screen';
import PizzaMenu from '../../modules/view/PizzaMenu/PizzaMenu.screen';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="cart" component={MyCart} />
        <Stack.Screen name="pizzaMenu" component={PizzaMenu} />
      </Stack.Navigator>
    );
  }
}
