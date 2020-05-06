import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import TearLines from '../components/TearLines.js';
import postOrderAPI from '../repository/postOrderAPI.js';
import {string} from '../resources/string.js';

const date = new Date().toDateString();

class ConfirmScreen extends Component {
  state = {
    isLoading: false,
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  createOrder = () => {
    let order = {};
    const {orderInfo, totalPrice} = this.props.route.params;
    let orderLineArrayClone = JSON.parse(
      JSON.stringify(this.props.orderLineArray),
    );

    orderLineArrayClone.forEach(orderLine => {
      delete orderLine.productData;
      delete orderLine.productPrice;
      delete orderLine.oldState;
      delete orderLine.optionTitleArray;
    });

    order.orderLineArray = orderLineArrayClone;
    order.phone = orderInfo.phone;
    order.name = orderInfo.name;
    order.address = orderInfo.address;
    order.note = orderInfo.note;

    this.postOrder(order);
  };

  postOrder = async order => {
    const {navigation} = this.props;
    const {userToken} = this.props;
    const {orderInfo} = this.props.route.params;
    const {paymentMethod} = orderInfo;
    const {token} = userToken;
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWFhZGIyYmViMTQ4ZTE0NTQzNmFkMWYiLCJpYXQiOjE1ODgzMjIxMjQsImV4cCI6MTU4ODMyOTMyNH0.fijTIvO_SkA0c196LuqxZOr344iELI0rj-DvtQitDpc'

    const config = {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    };

    const url = inputPaymentMethod => {
      switch (inputPaymentMethod) {
        case 'COD': {
          return '/order:cod';
        }
        default:
          return null;
      }
    };

    try {
      let response = await postOrderAPI(url(paymentMethod), order, config);
      alert(
        `Your order has been sent.\nThank for choosing ${
          string.restaurantName
        }!`,
      );
      navigation.navigate('Thank You Screen');
    } catch (errorMessage) {
      if (errorMessage === 401) {
        alert('Your token has expired. Please log in again!');
        navigation.navigate('Log In Screen');
      } else {
        alert(errorMessage);
        console.log(errorMessage);
      }
    }
    this.setState({isLoading: false});
  };

  render() {
    const {orderInfo, totalPrice} = this.props.route.params;

    return (
      <View style={[dimensionStyles.container, {backgroundColor: '#FFFFFF'}]}>
        <ScrollView>
          <View style={dimensionStyles.CheckOutHeaderContainer}>
            <View style={dimensionStyles.headerCategoryName}>
              <Text style={textStyle.headerCategoryName}>CONFIRM</Text>
            </View>
            <View style={dimensionStyles.CheckOutHeaderInfo}>
              <View style={dimensionStyles.dashLineCheckOut} />
              <View style={dimensionStyles.CheckOutHeaderDatePrice}>
                <Text style={textStyle.CheckOutHeaderInfo}>Date:</Text>
                <Text style={textStyle.CheckOutHeaderInfo}>{date}</Text>
              </View>
              <View style={dimensionStyles.CheckOutHeaderDatePrice}>
                <Text style={textStyle.CheckOutHeaderInfo}>Total bill:</Text>
                <Text style={textStyle.CheckOutHeaderInfo}>${totalPrice}</Text>
              </View>
            </View>
          </View>
          <TearLines
            isUnder
            width={Dimensions.get('window').width}
            color="#e5293e"
          />
          <View style={dimensionStyles.orderInfoContainer}>
            <Text style={textStyle.OrderInfoField}>
              Receiver's name: {orderInfo.name}
            </Text>
            <Text style={textStyle.OrderInfoField}>
              Receiver's phone number: {orderInfo.phone}
            </Text>
            <Text style={textStyle.OrderInfoField}>
              Delivery address: {orderInfo.address}
            </Text>
            <Text style={textStyle.OrderInfoField}>
              Your note: {orderInfo.note}
            </Text>
            <Text style={textStyle.OrderInfoField}>
              Payment method: {orderInfo.paymentMethod}
            </Text>
          </View>
          {this.state.isLoading ? (
            <>
              <TouchableOpacity
                style={dimensionStyles.continueButtonCheckOut}
                disabled={true}>
                <Text style={textStyle.orderNowButton}>Please wait...</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={dimensionStyles.backButtonCheckOut}
                disabled={true}>
                <Text style={textStyle.backButtonCheckOut}>BACK</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={dimensionStyles.continueButtonCheckOut}
                onPress={() => {
                  this.setState({isLoading: true});
                  this.createOrder();
                }}>
                <Text style={textStyle.orderNowButton}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={dimensionStyles.backButtonCheckOut}
                onPress={this.navigateBack}>
                <Text style={textStyle.backButtonCheckOut}>BACK</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </View>
    );
  }
}

ConfirmScreen.propTypes = {
  orderLineArray: PropTypes.array,
  userToken: PropTypes.object,
};

const mapStateToProps = state => ({
  orderLineArray: state.orderLineArray,
  userToken: state.userToken,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmScreen);
