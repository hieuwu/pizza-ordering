import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../modules/view/Login/Login.screen';
import SignUp from '../../modules/view/SignUp/SignUp.screen';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }
}
