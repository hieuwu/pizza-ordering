import React, {Component} from 'react';
import getAPI from '../repository/getAPI.js';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';
import SplashScreen from '../screens/SplashScreen.js';
import {connect} from 'react-redux';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {addToCart, modifyOrderLine} from '../redux/actions.js';
import {Dimensions} from 'react-native';

const mockData = [
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Size M',
    price: '1',
    type: 'Size',
    product: '5e9e969745787b2cc452752f',
  },
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Size L',
    price: '2',
    type: 'Size',
    product: '5e9e969745787b2cc452752f',
  },
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Thin Crust',
    price: '1.5',
    type: 'Crust',
    product: '5e9e969745787b2cc452752f',
  },
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Thick Crust',
    price: '2.5',
    type: 'Crust',
    product: '5e9e969745787b2cc452752f',
  },
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Shrimp',
    price: '1',
    type: 'Topping',
    product: '5e9e969745787b2cc452752f',
  },
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Onion',
    price: '2',
    type: 'Topping',
    product: '5e9e969745787b2cc452752f',
  },
  {
    _id: '5e9e969745787b2cc452754f',
    title: 'Pine Apple',
    price: '3',
    type: 'Topping',
    product: '5e9e969745787b2cc452752f',
  },
];

class OrderPanel extends Component {
  state = {
    isLoading: true,
    data: [],
    sizeArray: [],
    crustArray: [],
    toppingArray: [],
    size: '',
    crust: '',
    topping: [],
    quantity: '1',
  };

  getProductOption = async () => {
    //this.setState({isLoading: true});
    const {productData, modifiedOrderLineIndex, oldState} = this.props;
    const {_id} = productData;
    try {
      let response = await getAPI(`/product/${_id}/option`);
      //console.log(response.data)
      if (modifiedOrderLineIndex === undefined) {
        this.setState({
          data: response.data,
          size: '',
          crust: '',
          topping: [],
          quantity: '1',
        });
      } else {
        this.setState({
          data: response.data,
          size: oldState.size,
          crust: oldState.crust,
          topping: oldState.topping,
          quantity: oldState.quantity,
        });
      }
      //this.setState({data: mockData});
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
    const data = JSON.parse(JSON.stringify(this.state.data));
    this.filterOptionByType(data);
    this.setState({isLoading: false});
  };

  filterOptionByType = data => {
    let sizeArray = data.filter(unitData => unitData.type === 'Size');
    let crustArray = data.filter(unitData => unitData.type === 'Crust');
    let toppingArray = data.filter(unitData => unitData.type === 'Topping');
    this.setState({
      sizeArray: sizeArray,
      crustArray: crustArray,
      toppingArray: toppingArray,
    });
  };

  showSize = ({item}) => {
    const {title, price} = item;
    const {size} = this.state;
    if (size === title) {
      return (
        <TouchableOpacity
          onPress={() => this.setState({size: title})}
          style={dimensionStyles.SizePicker}>
          <Text style={textStyle.SizeText}>{title}</Text>
          <Text style={textStyle.SizeText}>Price: +{price}$</Text>
          <View style={dimensionStyles.checkIcon}>
            <Icon5 name="check" size={13} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.setState({size: title})}
          style={dimensionStyles.SizePickerUnpick}>
          <Text style={textStyle.SizeTextUnpick}>{title}</Text>
          <Text style={textStyle.SizeTextUnpick}>Price: +{price}$</Text>
        </TouchableOpacity>
      );
    }
  };

  showCrust = ({item}) => {
    const {title, price} = item;
    const {crust} = this.state;
    if (crust === title) {
      return (
        <TouchableOpacity
          onPress={() => this.setState({crust: title})}
          style={dimensionStyles.SizePicker}>
          <Text style={textStyle.SizeText}>{title}</Text>
          <Text style={textStyle.SizeText}>Price: +{price}$</Text>
          <View style={dimensionStyles.checkIcon}>
            <Icon5 name="check" size={13} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.setState({crust: title})}
          style={dimensionStyles.SizePickerUnpick}>
          <Text style={textStyle.SizeTextUnpick}>{title}</Text>
          <Text style={textStyle.SizeTextUnpick}>Price: +{price}$</Text>
        </TouchableOpacity>
      );
    }
  };

  showTopping = ({item}) => {
    const {title, price} = item;
    let topping = [...this.state.topping];
    let checkInclude = topping.includes(title);
    if (checkInclude === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            let index = topping.findIndex(unitData => unitData === title);
            topping.splice(index, 1);
            this.setState({topping: topping});
          }}
          style={dimensionStyles.SizePicker}>
          <Text style={textStyle.SizeText}>{title}</Text>
          <Text style={textStyle.SizeText}>Price: +{price}$</Text>
          <View style={dimensionStyles.checkIcon}>
            <Icon5 name="check" size={13} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            topping.push(title);
            this.setState({topping: topping});
          }}
          style={dimensionStyles.SizePickerUnpick}>
          <Text style={textStyle.SizeTextUnpick}>{title}</Text>
          <Text style={textStyle.SizeTextUnpick}>Price: +{price}$</Text>
        </TouchableOpacity>
      );
    }
  };

  calculatePrice = () => {
    const {productData} = this.props;
    let {price} = productData;

    let totalPrice = price;

    const {
      sizeArray,
      crustArray,
      toppingArray,
      size,
      crust,
      topping,
      quantity,
    } = this.state;

    let sizeOption = sizeArray.find(unitData => unitData.title === size);
    if (sizeOption !== undefined) {
      totalPrice = eval(`${totalPrice}+${sizeOption.price}`);
    }

    let crustOption = crustArray.find(unitData => unitData.title === crust);
    if (crustOption !== undefined) {
      totalPrice = eval(`${totalPrice}+${crustOption.price}`);
    }

    topping.forEach(toppingUnit => {
      let toppingOption = toppingArray.find(
        unitData => unitData.title === toppingUnit,
      );
      if (toppingOption !== undefined) {
        totalPrice = eval(`${totalPrice}+${toppingOption.price}`);
      }
    });

    totalPrice = eval(`${totalPrice}*${quantity}`);

    return totalPrice;
  };

  createOrderLine = totalPrice => {
    const {addToCart} = this.props;
    const {productData} = this.props;
    const {
      sizeArray,
      crustArray,
      toppingArray,
      size,
      crust,
      topping,
      quantity,
    } = this.state;
    let orderLine = {};

    orderLine.product = productData._id;

    orderLine.optionArray = [];
    orderLine.optionTitleArray = [];
    let sizeOption = sizeArray.find(unitData => unitData.title === size);
    if (sizeOption !== undefined) {
      orderLine.optionArray.push(sizeOption._id);
      orderLine.optionTitleArray.push(sizeOption.title);
    }
    let crustOption = crustArray.find(unitData => unitData.title === crust);
    if (crustOption !== undefined) {
      orderLine.optionArray.push(crustOption._id);
      orderLine.optionTitleArray.push(crustOption.title);
    }
    topping.forEach(toppingUnit => {
      let toppingOption = toppingArray.find(
        unitData => unitData.title === toppingUnit,
      );
      if (toppingOption !== undefined) {
        orderLine.optionArray.push(toppingOption._id);
        orderLine.optionTitleArray.push(toppingOption.title);
      }
    });

    orderLine.quantity = Number(quantity);

    let oldState = {
      size: size,
      crust: crust,
      topping: topping,
      quantity: quantity,
    };

    orderLine.productData = productData;
    orderLine.productPrice = Number(totalPrice);
    orderLine.oldState = oldState;

    const {modifiedOrderLineIndex, modifyOrderLine} = this.props;
    if (modifiedOrderLineIndex === undefined) {
      addToCart(orderLine);
    } else {
      modifyOrderLine(orderLine, modifiedOrderLineIndex);
    }
  };

  render() {
    const {modalVisible, onClose, RequestClose, productData} = this.props;
    const {imageUrl, title} = productData;
    const {
      sizeArray,
      crustArray,
      toppingArray,
      quantity,
      size,
      crust,
    } = this.state;
    const totalPrice = this.calculatePrice();
    const {modifiedOrderLineIndex} = this.props;

    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          RequestClose();
          this.setState({isLoading: true});
        }}
        onShow={this.getProductOption}>
        {this.state.isLoading ? (
          <View style={dimensionStyles.OrderPanel}>
            <SplashScreen />
          </View>
        ) : (
          <>
            <View style={dimensionStyles.OrderPanel}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => {
                    onClose();
                    this.setState({isLoading: true});
                  }}
                  style={dimensionStyles.XIconOrderPanel}>
                  <Icon name="close" size={30} color="#e5293e" />
                </TouchableOpacity>
                <Image
                  style={dimensionStyles.ImageOrderPanel}
                  source={{uri: imageUrl}}
                  resizeMode="cover"
                />
                <Text numberOfLines={2} style={textStyle.ProductDetailName}>
                  {title}
                </Text>
                {sizeArray.length !== 0 ? (
                  <>
                    <Text numberOfLines={1} style={textStyle.ModifyType}>
                      Size
                    </Text>
                    <View style={dimensionStyles.SizeModifyContainer}>
                      <FlatList
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={sizeArray}
                        keyExtractor={item => item.title}
                        renderItem={this.showSize}
                      />
                    </View>
                  </>
                ) : null}
                {crustArray.length !== 0 ? (
                  <>
                    <Text numberOfLines={1} style={textStyle.ModifyType}>
                      Crust
                    </Text>
                    <View style={dimensionStyles.SizeModifyContainer}>
                      <FlatList
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={crustArray}
                        keyExtractor={item => item.title}
                        renderItem={this.showCrust}
                      />
                    </View>
                  </>
                ) : null}
                {toppingArray.length !== 0 ? (
                  <>
                    <Text numberOfLines={1} style={textStyle.ModifyType}>
                      Topping
                    </Text>
                    <View style={dimensionStyles.SizeModifyContainer}>
                      <FlatList
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={toppingArray}
                        keyExtractor={item => item.title}
                        renderItem={this.showTopping}
                      />
                    </View>
                  </>
                ) : null}
                <Text numberOfLines={1} style={textStyle.ModifyType}>
                  Quantity
                </Text>
                <View style={dimensionStyles.quantityPicker}>
                  <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    placeholder={{
                      label: `Just now: ${quantity}`,
                      value: quantity,
                    }}
                    textInputProps={{
                      textAlign: 'center',
                      fontSize: 17,
                    }}
                    onValueChange={value => this.setState({quantity: value})}
                    items={[
                      {label: '1', value: '1'},
                      {label: '2', value: '2'},
                      {label: '3', value: '3'},
                      {label: '4', value: '4'},
                      {label: '5', value: '5'},
                      {label: '6', value: '6'},
                      {label: '7', value: '7'},
                      {label: '8', value: '8'},
                      {label: '9', value: '9'},
                      {label: '10', value: '10'},
                    ]}
                  />
                </View>
                <View style={dimensionStyles.separateLine} />
                <View style={dimensionStyles.PriceContainer}>
                  <Text numberOfLines={1} style={textStyle.ModifyType}>
                    Price:
                  </Text>
                  <Text numberOfLines={1} style={textStyle.ModifyType}>
                    {totalPrice}$
                  </Text>
                </View>
                <View style={dimensionStyles.separateLine} />
                {modifiedOrderLineIndex === undefined ? (
                  <TouchableOpacity
                    style={dimensionStyles.addToCartButton}
                    onPress={() => {
                      if (sizeArray.length !== 0 && size === '') {
                        alert('Please pick size');
                      } else if (crustArray.length !== 0 && crust === '') {
                        alert('Please pick crust');
                      } else {
                        this.createOrderLine(totalPrice);
                        RequestClose();
                        this.setState({isLoading: true});
                      }
                    }}>
                    <Text style={textStyle.orderNowButton}>ADD TO CART</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={dimensionStyles.addToCartButton}
                    onPress={() => {
                      if (sizeArray.length !== 0 && size === '') {
                        alert('Please pick size');
                      } else if (crustArray.length !== 0 && crust === '') {
                        alert('Please pick crust');
                      } else {
                        this.createOrderLine(totalPrice);
                        RequestClose();
                        this.setState({isLoading: true});
                      }
                    }}>
                    <Text style={textStyle.orderNowButton}>MODIFY</Text>
                  </TouchableOpacity>
                )}
              </ScrollView>
            </View>
          </>
        )}
      </Modal>
    );
  }
}

OrderPanel.propTypes = {
  modalVisible: PropTypes.bool,
  onClose: PropTypes.func,
  productData: PropTypes.object,
  RequestClose: PropTypes.func,
  oldState: PropTypes.object,
  modifiedOrderLineIndex: PropTypes.number,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToCart: orderLine => dispatch(addToCart(orderLine)),
  modifyOrderLine: (orderLine, modifiedOrderLineIndex) =>
    dispatch(modifyOrderLine(orderLine, modifiedOrderLineIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPanel);
