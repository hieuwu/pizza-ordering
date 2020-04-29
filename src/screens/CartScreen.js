import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteOrderLine} from '../redux/actions.js';
import OrderPanel from '../components/OrderPanel.js';

class CartScreen extends Component {
  state = {
    isOpenOrderPanel: false,
    productData: {},
    oldState: {},
    modifiedOrderLineIndex: null,
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  calculateTotalPrice = () => {
    const {orderLineArray} = this.props;
    let totalPrice = '0';
    orderLineArray.forEach(orderLine => {
      totalPrice = eval(`${totalPrice}+${orderLine.productPrice}`);
    });
    return totalPrice;
  };

  showCartList = ({item, index}) => {
    const {productData, oldState} = item;
    const {imageUrl, title} = productData;
    const {quantity, optionArray, productPrice} = item;
    let options = '';
    optionArray.forEach(option => {
      options = options + option.title + ',' + ' ';
    });
    return (
      <TouchableOpacity
        onPress={() =>
          this.openMofifyProductPanel(productData, oldState, index)
        }
        style={dimensionStyles.ItemCartListContainer}>
        <View style={{flex: 1}}>
          <Image
            style={dimensionStyles.ItemCartListImage}
            source={{uri: imageUrl}}
            resizeMode="cover"
          />
        </View>
        <View style={dimensionStyles.ItemCartListInfo}>
          <TouchableOpacity
            onPress={() => this.deleteOrderLine(index)}
            style={dimensionStyles.XIconCartScreen}>
            <Icon name="close" size={30} color="#e5293e" />
          </TouchableOpacity>
          <Text numberOfLines={1} style={textStyle.ItemCartListName}>
            {quantity} x {title}
          </Text>
          <Text numberOfLines={1} style={textStyle.ItemCartListOption}>
            {options}
          </Text>
          <Text numberOfLines={1} style={textStyle.ItemCartListPrice}>
            ${productPrice}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  deleteOrderLine = orderLineIndex => {
    const {deleteOrderLine} = this.props;
    deleteOrderLine(orderLineIndex);
  };

  openMofifyProductPanel = (productData, oldState, modifiedOrderLineIndex) => {
    this.setState({
      productData: productData,
      oldState: oldState,
      isOpenOrderPanel: true,
      modifiedOrderLineIndex: modifiedOrderLineIndex,
    });
  };

  render() {
    const {orderLineArray} = this.props;
    console.log(orderLineArray);
    const totalPrice = this.calculateTotalPrice();
    const {productData, oldState, modifiedOrderLineIndex} = this.state;

    return (
      <View style={dimensionStyles.container}>
        <OrderPanel
          modalVisible={this.state.isOpenOrderPanel}
          onClose={() => this.setState({isOpenOrderPanel: false})}
          RequestClose={() => this.setState({isOpenOrderPanel: false})}
          productData={productData}
          oldState={oldState}
          modifiedOrderLineIndex={modifiedOrderLineIndex}
        />
        <ScrollView>
          <View style={dimensionStyles.curtainBackground} />
          <View style={dimensionStyles.headerCategoryName}>
            <Text style={textStyle.headerCategoryName}>Your Cart</Text>
          </View>
          <TouchableOpacity
            onPress={this.navigateBack}
            style={dimensionStyles.BarsIcon}>
            <Icon name="angle-left" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={dimensionStyles.cartBox}>
            <View style={dimensionStyles.cartBoxHeader}>
              <Text style={textStyle.cartBoxHeader}>
                {orderLineArray.length} Items / Total Price ${totalPrice}
              </Text>
            </View>
            <FlatList
              numColumns={1}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={orderLineArray}
              renderItem={this.showCartList}
            />
          </View>
          <TouchableOpacity
            style={dimensionStyles.checkOutButton}
            onPress={() => this.setState({isOpenOrderPanel: true})}>
            <Text style={textStyle.orderNowButton}>CHECK OUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

CartScreen.propTypes = {
  orderLineArray: PropTypes.array,
};

const mapStateToProps = state => ({
  orderLineArray: state.orderLineArray,
});

const mapDispatchToProps = dispatch => ({
  deleteOrderLine: orderLineIndex => dispatch(deleteOrderLine(orderLineIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);
