import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CartItem.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../modules/resources/colors/Colors';

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
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="times" size={30} color={colors.ovalColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="edit" size={30} color={colors.ovalColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
