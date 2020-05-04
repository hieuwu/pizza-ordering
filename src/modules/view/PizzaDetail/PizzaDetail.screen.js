import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import pizzaDetailStyles from './PizzaDetail.style';
import colors from '../../resources/colors/Colors';

import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';

//redux:
import {connect} from 'react-redux';
import {addItemToCart} from '../../../redux/actions/index';
import {ADD_ITEM_TO_CART} from '../../../redux/actions/type';

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
const RADIO_MEDIUM_LARGE_SIZE_TYPE = '9 inch';
const RADIO_SMALL_LARGE_SIZE_TYPE = '6 inch';
const RADIO_EXTRA_CHEESE_TYPE = 'extra cheese';
const RADIO_DOUBLE_CHEESE_TYPE = 'double cheese';
const RADIO_TRIPLE_CHEESE_TYPE = 'triple cheese';

const RADIO_THIN_CRUST_TYPE = 'thin crust';
const RADIO_HT_CRUST_TYPE = 'hand tossed crust';
const RADIO_NY_CRUST_TYPE = 'new york crust';

class PizzaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeType: RADIO_LARGE_SIZE_TYPE,
      crustType: RADIO_THIN_CRUST_TYPE,
      cheeseType: RADIO_EXTRA_CHEESE_TYPE,
      quantity: 1,
      sizePrice: this.props.route.params.data.price.sizeL,
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
      headerRight: navigation => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('cart')}>
          <HeaderIcon iconName="shopping-cart" />
        </TouchableOpacity>
      ),
    });
  }

  componentDidMount() {
    this.setHeaderBar();
    switch (this.props.route.params.pizzaTitle) {
      case 'PRIME BEEF':
        // let .... return data
        break;
      default:
        break;
    }
  }

  renderCheeseOptions = pizzaCheese => {
    if (pizzaCheese !== undefined) {
      return (
        <View>
          <Text style={pizzaDetailStyles.optionTitleText}> Cheese </Text>
          <View style={pizzaDetailStyles.radioContainer}>
            <RadioForm
              formHorizontal={false}
              buttonColor={colors.ovalColor}
              selectedButtonColor={colors.ovalColor}
              radio_props={pizzaCheese}
              style={pizzaDetailStyles.radioVerticalForm}
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
  };

  renderSizeOptions = pizzaSize => {
    return (
      <View>
        <Text style={pizzaDetailStyles.optionTitleText}> Size </Text>
        <View style={pizzaDetailStyles.radioContainer}>
          <RadioForm
            formHorizontal={false}
            buttonColor={colors.ovalColor}
            selectedButtonColor={colors.ovalColor}
            radio_props={pizzaSize}
            style={pizzaDetailStyles.radioVerticalForm}
            initial={0}
            onPress={value => {
              this.setState({sizePrice: value.price});
              this.setState({sizeType: value.radioSizeType});
            }}
          />
        </View>
      </View>
    );
  };

  renderCrustOptions = pizzaCrust => {
    return (
      <View>
        <Text style={pizzaDetailStyles.optionTitleText}> Crust </Text>
        <View style={pizzaDetailStyles.radioContainer}>
          <RadioForm
            formHorizontal={false}
            buttonColor={colors.ovalColor}
            selectedButtonColor={colors.ovalColor}
            radio_props={pizzaCrust}
            style={pizzaDetailStyles.radioVerticalForm}
            initial={0}
            onPress={value => {
              this.setState({crustType: value});
            }}
          />
        </View>
      </View>
    );
  };

  increaseQuantity = () => {
    this.setState({quantity: this.state.quantity + 1});
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1});
    }
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  renderPrice() {
    return (
      <View style={pizzaDetailStyles.priceContainer}>
        <Text style={pizzaDetailStyles.priceText}>
          {this.numberWithCommas(this.props.route.params.data.price.sizeS)} -
          {this.numberWithCommas(this.props.route.params.data.price.sizeL)}
        </Text>
      </View>
    );
  }

  calculateTotalPrice = () => {
    return (
      (this.state.sizePrice + this.state.cheesePrice) * this.state.quantity
    );
  };

  createCartLine = () => {
    const {addItemToCart} = this.props;
    checkoutPrice = this.calculateTotalPrice();
    let cartLine = {};
    cartLine.type = ADD_ITEM_TO_CART;
    cartLine.id = String(cartId);
    cartLine.title = this.props.route.params.data.name;
    cartLine.imageUrl = this.props.route.params.data.imgUrl;
    cartLine.sizeType = this.state.sizeType;
    cartLine.crustType = this.state.crustType;
    cartLine.cheeseType = this.state.cheeseType;
    cartLine.quantity = this.state.quantity;
    cartLine.totalPrice = checkoutPrice;
    addItemToCart(cartLine);
    cartId += 1;
  };

  getMoneyDisplayed = (title, money) => {
    return title + ' ( $' + this.numberWithCommas(money) + ' )';
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
          radioSizeType: RADIO_MEDIUM_LARGE_SIZE_TYPE,
        },
      },
      {
        label: this.getMoneyDisplayed(
          SMALL_SIZE_LABEL,
          this.props.route.params.data.price.sizeS,
        ),
        value: {
          price: this.props.route.params.data.price.sizeS,
          radioSizeType: RADIO_SMALL_LARGE_SIZE_TYPE,
        },
      },
    ];
    const pizzaCrust = [
      {label: THIN_CRUST_LABEL, value: RADIO_THIN_CRUST_TYPE},
      {label: HT_CRUST_LABEL, value: RADIO_HT_CRUST_TYPE},
      {label: NY_CRUST_LABEL, value: RADIO_NY_CRUST_TYPE},
    ];
    let pizzaCheese;
    if (this.props.route.params.data.cheesePrice !== undefined) {
      pizzaCheese = [
        {
          label: this.getMoneyDisplayed(
            EXTRA_CHEESE_LABEL,
            this.props.route.params.data.cheesePrice.extra,
          ),
          value: {
            price: this.props.route.params.data.cheesePrice.extra,
            radioCheeseType: RADIO_EXTRA_CHEESE_TYPE,
          },
        },
        {
          label: this.getMoneyDisplayed(
            DOUBLE_CHEESE_LABEL,
            this.props.route.params.data.cheesePrice.double,
          ),
          value: {
            price: this.props.route.params.data.cheesePrice.double,
            radioCheeseType: RADIO_DOUBLE_CHEESE_TYPE,
          },
        },
        {
          label: this.getMoneyDisplayed(
            TRIPLE_CHEESE_LABEL,
            this.props.route.params.data.cheesePrice.triple,
          ),
          value: {
            price: this.props.route.params.data.cheesePrice.triple,
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
    }

    const totalPrice = this.calculateTotalPrice();

    return (
      <View style={pizzaDetailStyles.container}>
        <OvalShape />
        <View style={{marginTop: 20}}>
          <View style={pizzaDetailStyles.imageContainer}>
            <Image
              style={pizzaDetailStyles.image}
              source={{uri: this.props.route.params.data.imgUrl}}
            />
          </View>
          <Text style={pizzaDetailStyles.pizzaTitle}>
            {this.props.route.params.data.name}
          </Text>
          <Text style={pizzaDetailStyles.pizzaDescription}>
            {this.props.route.params.data.description}
          </Text>
          {this.renderPrice()}
          <View style={pizzaDetailStyles.priceContainer}>
            <Text style={pizzaDetailStyles.priceText}>
              Total : {this.numberWithCommas(totalPrice)}
            </Text>
          </View>
        </View>
        <ScrollView style={pizzaDetailStyles.scrollViewContainer}>
          <View>{this.renderSizeOptions(pizzaSize)}</View>
          <View>{this.renderCrustOptions(pizzaCrust)}</View>
          <View>{this.renderCheeseOptions(pizzaCheese)}</View>
          <Text style={pizzaDetailStyles.optionTitleText}> Quantity </Text>
          <View style={pizzaDetailStyles.quantityContainer}>
            <TouchableOpacity
              style={pizzaDetailStyles.quantityIcon}
              onPress={this.decreaseQuantity}>
              <Icon name="minus-square" size={30} color={colors.ovalColor} />
            </TouchableOpacity>
            <Text style={pizzaDetailStyles.quantityText}>
              {this.state.quantity}
            </Text>
            <TouchableOpacity
              style={pizzaDetailStyles.quantityIcon}
              onPress={this.increaseQuantity}>
              <Icon name="plus-square" size={30} color={colors.ovalColor} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity
            style={pizzaDetailStyles.addCartBtn}
            onPress={this.createCartLine}>
            <Text style={pizzaDetailStyles.addCartText}> ADD TO CART </Text>
            <Icon name="cart-arrow-down" size={20} color={colors.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addItemToCart: cartLine => dispatch(addItemToCart(cartLine)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaDetail);
