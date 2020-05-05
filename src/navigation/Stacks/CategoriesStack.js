import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../../modules/view/Categories/Categories.screen';
import MyCart from '../../modules/view/Cart/MyCart.screen';
import PizzaMenu from '../../modules/view/PizzaMenu/PizzaMenu.screen';
import PizzaDetail from '../../modules/view/PizzaDetail/PizzaDetail.screen';
import Login from '../../modules/view/Login/Login.screen';
import SignUp from '../../modules/view/SignUp/SignUp.screen';
import CheckOut from '../../modules/view/CheckOut/CheckOut.screen';

const Stack = createStackNavigator();

export default class CategoriesStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="cart" component={MyCart} />
        <Stack.Screen name="pizzaMenu" component={PizzaMenu} />
        <Stack.Screen name="pizzaDetail" component={PizzaDetail} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="checkout" component={CheckOut} />
      </Stack.Navigator>
    );
  }
}
