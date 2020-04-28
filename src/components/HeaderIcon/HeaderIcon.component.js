import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderStyles from './HeaderIcon.style';
import colors from '../../modules/resources/colors/Colors';

export default class HeaderIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={HeaderStyles.headerIcon}>
        <Icon
          name={this.props.iconName}
          size={30}
          color={colors.icon}
          style={{margin: 10}}
        />
      </View>
    );
  }
}
