import React, {Component} from 'react';
import {View} from 'react-native';
import OvalStyles from '../OvalShape/OvalShape.style';

export default class OvalShape extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={OvalStyles.container} />;
  }
}
