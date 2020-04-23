import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';

export class ShowCategory extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  render() {
    const {img, title, onClick} = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={dimensionStyles.CategoryContainer}>
          <ImageBackground
            style={dimensionStyles.CategoryImg}
            source={{uri: img}}
            resizeMode="cover"
          />
          <Text style={textStyle.CategoryText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
