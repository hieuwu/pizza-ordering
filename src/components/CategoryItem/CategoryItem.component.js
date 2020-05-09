import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import CategoryItemStyles from './CategoryItem.style';

export default class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={CategoryItemStyles.container}>
        <Image
          source={{uri: this.props.imageSource}}
          style={CategoryItemStyles.image}
        />
        <View style={CategoryItemStyles.textContainer}>
          <Text style={CategoryItemStyles.text}> {this.props.title} </Text>
        </View>
      </View>
    );
  }
}
