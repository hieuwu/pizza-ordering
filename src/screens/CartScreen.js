import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView, FlatList, Image} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class CartScreen extends Component {

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  }

  calculateTotalPrice = () => {
    const {orderLineArray}=this.props;
    let totalPrice='0';
    orderLineArray.forEach((orderLine)=> {
        totalPrice=eval(`${totalPrice}+${orderLine.productPrice}`) 
      }
    )
    return totalPrice
  }

  showCartList = ({item, index}) => {
    const {imageUrl} = item.productData
    return(
      <TouchableOpacity style={dimensionStyles.ItemCartListContainer}>
        <View style={{flex: 1}}>
          <Image
            style={dimensionStyles.ProductListImg}
            source={{uri: imageUrl}}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 3}}>
        </View>
      </TouchableOpacity  >
    )
  }

  render() {
  	const {orderLineArray}=this.props;
  	console.log(orderLineArray);
    const totalPrice=this.calculateTotalPrice()

    return (
      <View style={dimensionStyles.container}>
        <ScrollView>
          <View style={dimensionStyles.curtainBackground} />
          <View style={dimensionStyles.headerCategoryName}>
            <Text style={textStyle.headerCategoryName}>
              Your Cart
            </Text>
          </View>
          <TouchableOpacity onPress={this.navigateBack} style={dimensionStyles.BarsIcon}>
            <Icon name="angle-left" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={dimensionStyles.cartBox}>
            <View style={dimensionStyles.cartBoxHeader}>
              <Text style={textStyle.cartBoxHeader}>{orderLineArray.length} Items / Total Price ${totalPrice}</Text>
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
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);