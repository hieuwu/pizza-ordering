import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
}
