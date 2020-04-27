import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../modules/view/Welcome/Welcome.Screen';
import MainDrawer from './Drawers/MainDrawer';

const Stack = createStackNavigator();

export default class AppStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
      </Stack.Navigator>
    );
  }
}
