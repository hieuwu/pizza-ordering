import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../modules/resources/colors/Colors';
import dimensions from '../../modules/resources/dimensions/Dimensions';

export default class TearLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayCircleIcon = () => {
    let listIcon = [];

    for (let i = 0; i < dimensions.screenSize.width; i = i + 20) {
      listIcon.push(
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />,
      );
    }
    return listIcon;
  };

  render() {
    return <View style={styles.container}>{this.displayCircleIcon()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    position: 'absolute',
    marginTop: dimensions.screenSize.height / 6 + 2,
    alignItems: 'center',
  },
});
