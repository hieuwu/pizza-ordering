import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import PizzaMenu from '../../modules/view/PizzaMenu/PizzaMenu.screen';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="pizzaMenu">
        <Stack.Screen name="pizzaMenu" component={PizzaMenu} />
      </Stack.Navigator>
    );
  }
}
