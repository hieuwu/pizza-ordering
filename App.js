import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}
