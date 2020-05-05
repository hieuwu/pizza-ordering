import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../modules/resources/colors/Colors';

export default class TearLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
        <Icon
          name={'circle'}
          size={30}
          color={colors.pizzaMenuListBackground}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    position: 'absolute',
    marginTop: 110,
    alignItems: 'center',
  },
});
