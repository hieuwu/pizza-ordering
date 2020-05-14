import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './ProductDetail.style';
import colors from '../../resources/colors/Colors';
import strings from '../../resources/strings/strings';

import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';

//redux:
import {connect} from 'react-redux';
import {
  addItemToCart,
  storeItemToLocalCart,
} from '../../../redux/actions/index';
import {ADD_ITEM_TO_CART} from '../../../redux/actions/type';
import CartUseCase from '../../../UseCase/CartUseCase';

let cartId = 0;
let checkoutPrice = 0;
const LARGE_SIZE_LABEL = 'Large - 12 inch';
const MEDIUM_SIZE_LABEL = 'Medium - 9 inch';
const SMALL_SIZE_LABEL = 'Small - 6 inch';
const EXTRA_CHEESE_LABEL = 'Extra cheese';
const DOUBLE_CHEESE_LABEL = 'Double cheese';
const TRIPLE_CHEESE_LABEL = 'Triple cheese';
const THIN_CRUST_LABEL = 'Thin Crust';
const HT_CRUST_LABEL = 'Hand Tossed Crust';
const NY_CRUST_LABEL = 'New York Crust';

const RADIO_LARGE_SIZE_TYPE = '12 inch';
const RADIO_MEDIUM_SIZE_TYPE = '9 inch';
const RADIO_SMALL_SIZE_TYPE = '6 inch';
const RADIO_EXTRA_CHEESE_TYPE = 'extra cheese';
const RADIO_DOUBLE_CHEESE_TYPE = 'double cheese';
const RADIO_TRIPLE_CHEESE_TYPE = 'triple cheese';

const RADIO_THIN_CRUST_TYPE = 'thin crust';
const RADIO_HT_CRUST_TYPE = 'hand tossed crust';
const RADIO_NY_CRUST_TYPE = 'new york crust';

const EXTRA_CHEESE_PRICE = 10000;
const DOUBLE_CHEESE_PRICE = 20000;
const TRIPLE_CHEESE_PRICE = 30000;

const PIZZA_INDEX = 4;

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartId: this.props.route.params.catId,
      sizeType: RADIO_SMALL_SIZE_TYPE,
      crustType: RADIO_THIN_CRUST_TYPE,
      cheeseType: '',
      quantity: 1,
      sizePrice: this.props.route.params.data.price.sizeS,
      cheesePrice: 0,
    };
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: null,
      headerTransparent: true,
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      headerLeft: navigation => (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <HeaderIcon iconName="arrow-left" />
        </TouchableOpacity>
      ),
    });
  }

  componentDidMount() {
    this.setHeaderBar();
    this.getItemLocalCart();
  }

  renderCheeseOptions = pizzaCheese => {
    if (this.state.cartId === PIZZA_INDEX) {
      if (pizzaCheese !== undefined) {
        return (
          <View>
            <Text style={styles.optionTitleText}> Cheese </Text>
            <View style={styles.radioContainer}>
              <RadioForm
                formHorizontal={false}
                buttonColor={colors.ovalColor}
                selectedButtonColor={colors.ovalColor}
                radio_props={pizzaCheese}
                style={styles.radioVerticalForm}
                initial={3}
                onPress={value => {
                  this.setState({cheesePrice: value.price});
                  this.setState({cheeseType: value.radioCheeseType});
                }}
              />
            </View>
          </View>
        );
      }
    } else {
      return null;
    }
  };

  renderSizeOptions = pizzaSize => {
    if (this.state.cartId === PIZZA_INDEX) {
      return (
        <View>
          <Text style={styles.optionTitleText}> Size </Text>
          <View style={styles.radioContainer}>
            <RadioForm
              formHorizontal={false}
              buttonColor={colors.ovalColor}
              selectedButtonColor={colors.ovalColor}
              radio_props={pizzaSize}
              style={styles.radioVerticalForm}
              initial={2}
              onPress={value => {
                this.setState({sizePrice: value.price});
                this.setState({sizeType: value.radioSizeType});
              }}
            />
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  renderCrustOptions = pizzaCrust => {
    if (this.state.cartId === PIZZA_INDEX) {
      return (
        <View>
          <Text style={styles.optionTitleText}> Crust </Text>
          <View style={styles.radioContainer}>
            <RadioForm
              formHorizontal={false}
              buttonColor={colors.ovalColor}
              selectedButtonColor={colors.ovalColor}
              radio_props={pizzaCrust}
              style={styles.radioVerticalForm}
              initial={0}
              onPress={value => {
                this.setState({crustType: value});
              }}
            />
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  increaseQuantity = () => {
    if (this.state.quantity < 10) {
      this.setState({quantity: this.state.quantity + 1});
    }
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1});
    }
  };

  numberWithCommas(x) {
    return (
      x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + strings.appCurrency
    );
  }

  calculateTotalPrice = () => {
    return (
      (this.state.sizePrice + this.state.cheesePrice) * this.state.quantity
    );
  };

  getItemLocalCart = async () => {
    let localCart = await new CartUseCase().getCurrentLocalCart();
  };

  createCartLine = async () => {
    const {addItemToCart} = this.props;
    const {storeItemToLocalCart} = this.props;
    const {jobs} = this.props;
    checkoutPrice = this.calculateTotalPrice();
    let cartLine = {};
    cartLine.type = ADD_ITEM_TO_CART;
    cartLine.id = String(cartId);
    cartLine.title = this.props.route.params.data.name;
    cartLine.imageUrl = this.props.route.params.data.imgUrl;
    if (this.state.cartId === PIZZA_INDEX) {
      cartLine.sizeType = this.state.sizeType;
      cartLine.crustType = this.state.crustType;
      cartLine.cheeseType = this.state.cheeseType;
    }
    cartLine.quantity = this.state.quantity;
    cartLine.totalPrice = checkoutPrice;
    addItemToCart(cartLine);
    storeItemToLocalCart();
    cartId += 1;
    this.props.navigation.goBack();
  };

  getMoneyDisplayed = (title, money) => {
    return title + ' ( ' + this.numberWithCommas(money) + ' )';
  };

  render() {
    const pizzaSize = [
      {
        label: this.getMoneyDisplayed(
          LARGE_SIZE_LABEL,
          this.props.route.params.data.price.sizeL,
        ),
        value: {
          price: this.props.route.params.data.price.sizeL,
          radioSizeType: RADIO_LARGE_SIZE_TYPE,
        },
      },
      {
        label: this.getMoneyDisplayed(
          MEDIUM_SIZE_LABEL,
          this.props.route.params.data.price.sizeM,
        ),
        value: {
          price: this.props.route.params.data.price.sizeM,
          radioSizeType: RADIO_MEDIUM_SIZE_TYPE,
        },
      },
      {
        label: this.getMoneyDisplayed(
          SMALL_SIZE_LABEL,
          this.props.route.params.data.price.sizeS,
        ),
        value: {
          price: this.props.route.params.data.price.sizeS,
          radioSizeType: RADIO_SMALL_SIZE_TYPE,
        },
      },
    ];
    const pizzaCrust = [
      {label: THIN_CRUST_LABEL, value: RADIO_THIN_CRUST_TYPE},
      {label: HT_CRUST_LABEL, value: RADIO_HT_CRUST_TYPE},
      {label: NY_CRUST_LABEL, value: RADIO_NY_CRUST_TYPE},
    ];
    let pizzaCheese = [
      {
        label: this.getMoneyDisplayed(EXTRA_CHEESE_LABEL, EXTRA_CHEESE_PRICE),
        value: {
          price: EXTRA_CHEESE_PRICE,
          radioCheeseType: RADIO_EXTRA_CHEESE_TYPE,
        },
      },
      {
        label: this.getMoneyDisplayed(DOUBLE_CHEESE_LABEL, DOUBLE_CHEESE_PRICE),
        value: {
          price: DOUBLE_CHEESE_PRICE,
          radioCheeseType: RADIO_DOUBLE_CHEESE_TYPE,
        },
      },
      {
        label: this.getMoneyDisplayed(TRIPLE_CHEESE_LABEL, TRIPLE_CHEESE_PRICE),
        value: {
          price: TRIPLE_CHEESE_PRICE,
          radioCheeseType: RADIO_TRIPLE_CHEESE_TYPE,
        },
      },
      {
        label: 'None',
        value: {
          price: 0,
          radioCheeseType: 'none',
        },
      },
    ];

    const totalPrice = this.calculateTotalPrice();

    return (
      <View style={styles.container}>
        <OvalShape />
        <View style={{marginTop: 20}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: this.props.route.params.data.imgUrl}}
            />
          </View>
          <Text style={styles.pizzaTitle}>
            {this.props.route.params.data.name}
          </Text>
          <Text style={styles.pizzaDescription}>
            {this.props.route.params.data.description}
          </Text>
        </View>
        <ScrollView
          style={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}>
          <View>{this.renderSizeOptions(pizzaSize)}</View>
          <View>{this.renderCrustOptions(pizzaCrust)}</View>
          <View>{this.renderCheeseOptions(pizzaCheese)}</View>
          <Text style={styles.optionTitleText}> Quantity </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityIcon}
              onPress={this.decreaseQuantity}>
              <Icon name="minus-square" size={30} color={colors.ovalColor} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{this.state.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityIcon}
              onPress={this.increaseQuantity}>
              <Icon name="plus-square" size={30} color={colors.ovalColor} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.priceText}>
            {strings.productDetail.txtTotal}
            {this.numberWithCommas(totalPrice)}
          </Text>
          <TouchableOpacity
            style={styles.addCartBtn}
            onPress={this.createCartLine}>
            <Text style={styles.addCartText}> ADD TO CART </Text>
            <Icon name="cart-arrow-down" size={20} color={colors.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: cartLine => dispatch(addItemToCart(cartLine)),
  storeItemToLocalCart: () => dispatch(storeItemToLocalCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);