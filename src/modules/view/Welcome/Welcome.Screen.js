import React, {Component} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import welcomeStyle from './Welcome.style';
import welcomeStrings from '../../resources/strings/Welcome.strings';

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
          <Text style={welcomeStyle.restaurantText}>
            {welcomeStrings.restaurant}
          </Text>
          <Text style={welcomeStyle.pizzaText}>{welcomeStrings.name}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MainDrawer')}>
            <View style={welcomeStyle.buttonContainer}>
              <Text style={welcomeStyle.buttonText}>
                {welcomeStrings.startOrder}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
