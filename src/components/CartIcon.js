import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dimensionStyles} from '../resources/dimension.js';

export class CartIcon extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  render() {
    const {onClick} = this.props;
    return (
      <TouchableOpacity onPress={onClick} style={dimensionStyles.CartIcon}>
        <Icon name="shopping-bag" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    );
  }
}
