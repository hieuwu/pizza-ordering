import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import TearLines from '../components/TearLines.js';
import CashImg from '../../assets/cash.jpg';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

// const mockDataPaymentMethod=[
// 	{title:'COD', imageUrl: CashImg},
// 	{title:'VISA', imageUrl: CashImg},
// 	{title:'Master Card', imageUrl: CashImg},
// 	{title:'Pay Pal', imageUrl: CashImg},
// ]

const mockDataPaymentMethod = [{title: 'COD', imageUrl: CashImg}];

const date = new Date().toDateString();

class CheckOutScreen extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
    note: '',
    paymentMethod: '',
  };

  componentDidMount() {
    const {userToken} = this.props;
    const {user} = userToken;
    const {name, phone, address} = user;
    this.setState({name: name, phone: phone, address: address});
  }

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  showPaymentMethod = ({item}) => {
    const {title, imageUrl} = item;
    const {paymentMethod} = this.state;
    if (paymentMethod === title) {
      return (
        <TouchableOpacity
          onPress={() => this.setState({paymentMethod: title})}
          style={dimensionStyles.paymentMethodPicker}>
          <Image
            style={dimensionStyles.ImagePaymentMethod}
            source={imageUrl}
            resizeMode="cover"
          />
          <Text style={textStyle.SizeText}>{title}</Text>
          <View style={dimensionStyles.checkIconPaymentMethod}>
            <Icon5 name="check" size={13} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.setState({paymentMethod: title})}
          style={dimensionStyles.paymentMethodPickerUnpick}>
          <Image
            style={dimensionStyles.ImagePaymentMethod}
            source={imageUrl}
            resizeMode="cover"
          />
          <Text style={textStyle.SizeTextUnpick}>{title}</Text>
        </TouchableOpacity>
      );
    }
  };

  createOrderInfo = () => {
    const {name, phone, address, note, paymentMethod} = this.state;
    const phone_regex = /((09|03|07|08|05)+([0-9]{8,9})\b)/g;
    const checkPhone = phone_regex.test(phone);

    if (paymentMethod === '') {
      alert('Please pick payment method!');
    } else if (name === '') {
      alert('Name is required');
    } else if (phone === '') {
      alert('Phone is required');
    } else if (checkPhone === false) {
      alert('Please enter a valid phone number');
    } else if (address === '') {
      alert('Address is required');
    } else {
      let orderInfo = {
        name: name,
        phone: phone,
        address: address,
        note: note,
        paymentMethod: paymentMethod,
      };

      this.navigateToConfirmScreen(orderInfo);
    }
  };

  navigateToConfirmScreen = orderInfo => {
    const {totalPrice} = this.props.route.params;
    const {navigation} = this.props;
    navigation.navigate('Confirm Screen', {
      orderInfo: orderInfo,
      totalPrice: totalPrice,
    });
  };

  render() {
    const {totalPrice} = this.props.route.params;
    const {name, phone, address, note, paymentMethod} = this.state;

    return (
      <View style={[dimensionStyles.container, {backgroundColor: '#FFFFFF'}]}>
        <ScrollView>
          <View style={dimensionStyles.CheckOutHeaderContainer}>
            <View style={dimensionStyles.headerCategoryName}>
              <Text style={textStyle.headerCategoryName}>CHECK OUT</Text>
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
            <Text style={textStyle.OrderInfoTitle}>1. Contact information</Text>
            <Text style={textStyle.OrderInfoField}>Receiver's name</Text>
            <TextInput
              style={textStyle.StringInputCheckOut}
              onChangeText={text => this.setState({name: text})}
              keyboardType="default"
              secureTextEntry={false}
              value={name}
            />
            <Text style={textStyle.OrderInfoField}>
              Receiver's phone number
            </Text>
            <TextInput
              style={textStyle.StringInputCheckOut}
              onChangeText={text => this.setState({phone: text})}
              keyboardType="number-pad"
              secureTextEntry={false}
              value={phone}
            />
            <Text style={textStyle.OrderInfoField}>Delivery address</Text>
            <TextInput
              style={textStyle.StringInputCheckOut}
              onChangeText={text => this.setState({address: text})}
              keyboardType="default"
              secureTextEntry={false}
              value={address}
            />
            <Text style={textStyle.OrderInfoField}>Note</Text>
            <TextInput
              placeholder="Your note"
              multiline
              style={textStyle.StringInputCheckOutNote}
              onChangeText={text => this.setState({note: text})}
              keyboardType="default"
              secureTextEntry={false}
              value={note}
            />
            <Text style={textStyle.OrderInfoTitle}>2. Payment method</Text>
            <FlatList
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={mockDataPaymentMethod}
              keyExtractor={item => item.title}
              renderItem={this.showPaymentMethod}
            />
          </View>
          <TouchableOpacity
            style={dimensionStyles.continueButtonCheckOut}
            onPress={() => {
              this.createOrderInfo();
            }}>
            <Text style={textStyle.orderNowButton}>CONTINUE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={dimensionStyles.backButtonCheckOut}
            onPress={this.navigateBack}>
            <Text style={textStyle.backButtonCheckOut}>BACK</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

CheckOutScreen.propTypes = {
  userToken: PropTypes.object,
};

const mapStateToProps = state => ({
  userToken: state.userToken,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckOutScreen);
