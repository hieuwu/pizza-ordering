import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PizzaListItemStyles from './PizzaListItem.style';

export default class PizzaListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
            <Text>{this.numberWithCommas(this.props.pizzaItemLargePrice)}</Text>
          </View>
          <View style={PizzaListItemStyles.sizeItemContainer}>
            <Text> Size M: </Text>
            <Text>
              {this.numberWithCommas(this.props.pizzaItemMediumPrice)}
            </Text>
          </View>
          <View style={PizzaListItemStyles.sizeItemContainer}>
            <Text> Size S: </Text>
            <Text>{this.numberWithCommas(this.props.pizzaItemSmallPrice)}</Text>
          </View>
        </View>
      </View>
    );
  }
}
