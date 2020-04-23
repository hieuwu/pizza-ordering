import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={dimensionStyles.splashScreenContainer}>
        <ActivityIndicator />
      </View>
    );
  }
}
