import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PizzaListItemStyles from './PizzaListItem.style';

export default class PizzaListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={PizzaListItemStyles.container}>
        <View style={PizzaListItemStyles.imageContainer}>
          <Image
            source={{uri: this.props.imageSource}}
            style={PizzaListItemStyles.image}
          />
        </View>
        <View style={PizzaListItemStyles.titleContainer}>
          <Text style={PizzaListItemStyles.titleText}>
            {this.props.pizzaItemTitle}
          </Text>
        </View>
        <View style={PizzaListItemStyles.sizeContainer}>
          <View style={PizzaListItemStyles.sizeItemContainer}>
            <Text> Size L: </Text>
            <Text> {this.props.pizzaItemLargePrice} </Text>
          </View>
          <View style={PizzaListItemStyles.sizeItemContainer}>
            <Text> Size M: </Text>
            <Text> {this.props.pizzaItemMediumPrice} </Text>
          </View>
        </View>
      </View>
    );
  }
}
