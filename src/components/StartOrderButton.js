import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export class StartOrderButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };
  render() {
    const {onClick} = this.props;
    return (
      <TouchableOpacity
        style={dimensionStyles.StartOrderButton}
        onPress={onClick}>
        <Text style={textStyle.StartOrderButton}>START ORDER</Text>
        <View style={dimensionStyles.ArrowRightIconHome}>
          <Icon name="angle-right" size={20} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    );
  }
}
