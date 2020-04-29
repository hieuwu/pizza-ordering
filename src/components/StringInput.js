import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';

export class StringInput extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func,
  };

  render() {
    const {text, onTextChange, placeholder, keyboard, isSecure} = this.props;
    return (
      <TextInput
        style={textStyle.StringInput}
        placeholder={placeholder}
        onChangeText={onTextChange}
        keyboardType={keyboard}
        secureTextEntry={isSecure}
        value={text}
      />
    );
  }
}
