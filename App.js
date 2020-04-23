import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from './src/modules/view/Welcome.component';
import Categories from './src/modules/view/Categories.component';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="categories" component={Categories} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
