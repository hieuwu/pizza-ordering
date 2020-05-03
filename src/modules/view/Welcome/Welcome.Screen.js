import React, {Component} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import welcomeStyle from './Welcome.style';
import strings from '../../resources/strings/strings';

const localImage = require('../../resources/images/welcome03.jpg');

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={welcomeStyle.container}>
        <Image style={welcomeStyle.image} source={localImage} />
        <View style={welcomeStyle.titleContainer}>
          <Text style={welcomeStyle.restaurantText}>{strings.restaurant}</Text>
          <Text style={welcomeStyle.pizzaText}>{strings.name}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MainDrawer')}>
            <View style={welcomeStyle.buttonContainer}>
              <Text style={welcomeStyle.buttonText}>{strings.startOrder}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
