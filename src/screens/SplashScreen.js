import React, {Component} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import Logo from '../../assets/Logo.png';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={[dimensionStyles.containerCenter,{backgroundColor:'#FFFFFF'}]}>
      	<Image
          style={{width: 100, height: 100, marginVertical: 20, tintColor: '#0b2031'}}
          source={Logo}
          resizeMode="contain"
        />
        <ActivityIndicator color="#0b2031"/>
      </View>
    );
  }
}
