import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CartItem.style';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCheese(cheese) {
    if (cheese !== '') {
      return <Text> {this.props.pizzaCheese} cheese </Text>;
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: this.props.imageUrl}} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionItem}>
            <Text> {this.props.quantity} x </Text>
            <Text> {this.props.pizzaSize} </Text>
            <Text> {this.props.pizzaCrust} </Text>
            {this.renderCheese(this.props.pizzaCheese)}
            <Text> {this.props.pizzaTitle} </Text>
          </View>
          <Text style={styles.priceText}>Price : {this.props.totalPrice}</Text>
        </View>
      </View>
    );
  }
}
