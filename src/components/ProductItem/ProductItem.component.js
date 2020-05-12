import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ProductItemStyles from './ProductItem.style';
import strings from '../../modules/resources/strings/strings';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  numberWithCommas(x) {
    return (
      x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + strings.appCurrency
    );
  }

  displaySizeL = () => {
    return (
      <View style={ProductItemStyles.sizeItemContainer}>
        <Text>{strings.productItem.txtSizeL}</Text>
        <Text>{this.numberWithCommas(this.props.sizeL)}</Text>
      </View>
    );
  };

  displaySizeM = () => {
    return (
      <View style={ProductItemStyles.sizeItemContainer}>
        <Text>{strings.productItem.txtSizeM}</Text>
        <Text>{this.numberWithCommas(this.props.sizeM)}</Text>
      </View>
    );
  };

  displaySizeS = () => {
    return (
      <View style={ProductItemStyles.sizeItemContainer}>
        <Text>{strings.productItem.txtSizeS}</Text>
        <Text>{this.numberWithCommas(this.props.sizeS)}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={ProductItemStyles.container}>
        <View style={ProductItemStyles.imageContainer}>
          <Image
            source={{uri: this.props.imgUrl}}
            style={ProductItemStyles.image}
          />
        </View>
        <View style={ProductItemStyles.titleContainer}>
          <Text style={ProductItemStyles.titleText}>{this.props.name}</Text>
        </View>
        <View style={ProductItemStyles.sizeContainer}>
          {this.props.sizeL > 0 ? this.displaySizeL() : null}
          {this.props.sizeM > 0 ? this.displaySizeM() : null}
          {this.props.sizeS > 0 ? this.displaySizeS() : null}
        </View>
      </View>
    );
  }
}
