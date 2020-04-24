import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import productStyles from './Products.style';

export default class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('navigate to ' + this.props.title);
        }}>
        <View style={productStyles.container}>
          <Image source={this.props.imageSource} style={productStyles.image} />
          <View style={productStyles.textContainer}>
            <Text style={productStyles.text}> {this.props.title} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
