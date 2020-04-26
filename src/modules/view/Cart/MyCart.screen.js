import React, {Component} from 'react';
import {View, Text} from 'react-native';
import cartStyles from './MyCart.styles';

export default class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={cartStyles.container}>
        <Text> MyCart Screen </Text>
      </View>
    );
  }
}
