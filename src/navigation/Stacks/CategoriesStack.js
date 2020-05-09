import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../../modules/view/Categories/Categories.screen';
import MyCart from '../../modules/view/Cart/MyCart.screen';
import ProductMenu from '../../modules/view/ProductMenu/ProductMenu.screen';
import ProductDetail from '../../modules/view/PizzaDetail/ProductDetail.screen';
import Login from '../../modules/view/Login/Login.screen';
import SignUp from '../../modules/view/SignUp/SignUp.screen';
import CheckOut from '../../modules/view/CheckOut/CheckOut.screen';
import Shipping from '../../modules/view/Shipping/Shipping.screen';

const Stack = createStackNavigator();

export default class CategoriesStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="cart" component={MyCart} />
        <Stack.Screen name="productMenu" component={ProductMenu} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="shipping" component={Shipping} />
        <Stack.Screen name="checkout" component={CheckOut} />
      </Stack.Navigator>
    );
  }
}
