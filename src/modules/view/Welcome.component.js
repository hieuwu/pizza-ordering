import React, {Component} from 'react';
import {Image, View, Text, Button, TouchableOpacity, Alert} from 'react-native';
import welcomeStyle from './Welcome.style';
import welcomeStrings from '../resources/strings/Welcome.strings';

const image = {
  uri:
    'https://images.unsplash.com/photo-1586032340517-0475038cee18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
};

const localImage = require('../resources/images/welcome03.jpg');

function onPress() {
  console.log('navigate to category screen');
}

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
            style={welcomeStyle.buttonContainer}
            onPress={onPress}>
            <Text style={welcomeStyle.buttonText}>
              {welcomeStrings.startOrder}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
