import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../modules/view/Welcome/Welcome.Screen';
import Categories from '../modules/view/Categories/Categories.Screen';

const Stack = createStackNavigator();

export default class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="categories" component={Categories} />
      </Stack.Navigator>
    );
  }
}
