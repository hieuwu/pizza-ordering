import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import pizzaDetailStyles from './PizzaDetail.style';
import colors from '../../resources/colors/Colors';

import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';

export default class PizzaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crustType: 'thin crust',
      cheeseType: 'extra cheese',
      quantity: 1,
      sizePrice: this.props.route.params.data.largePrice,
      cheesePrice: 0,
      totalPrice: 0,
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
              initial={-1}
              onPress={value => {
                this.setState({cheesePrice: value.price});
                this.setState({cheeseType: value.radioCheeseType});
              }}
            />
            <Text>
              current cheese price:
              {this.numberWithCommas(this.state.cheesePrice)}
            </Text>
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
            formHorizontal={true}
            buttonColor={colors.ovalColor}
            selectedButtonColor={colors.ovalColor}
            radio_props={pizzaSize}
            style={pizzaDetailStyles.radioHorizontalForm}
            initial={0}
            onPress={value => {
              this.setState({sizePrice: value});
              console.log('change choose size: ' + this.state.sizePrice);
            }}
          />
          <Text> current size : {this.state.sizePrice}</Text>
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
          <Text> current crust : {this.state.crustType}</Text>
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
          {this.numberWithCommas(this.props.route.params.data.mediumPrice)} -
          {this.numberWithCommas(this.props.route.params.data.largePrice)}
        </Text>
      </View>
    );
  }

  calculateTotalPrice = () => {
    this.setState({
      totalPrice:
        (this.state.sizePrice + this.state.cheesePrice) * this.state.quantity,
    });
    console.log(this.state);
  };

  render() {
    const pizzaSize = [
      {
        label: 'Large - 12 inch',
        value: this.props.route.params.data.largePrice,
      },
      {
        label: 'Medium - 9 inch',
        value: this.props.route.params.data.mediumPrice,
      },
    ];
    const pizzaCrust = [
      {label: 'Thin Crust', value: 'thin crust'},
      {label: 'Hand Tossed Crust', value: 'hand tossed crust'},
      {label: 'New York Crust', value: 'new york crust'},
    ];
    let pizzaCheese;
    if (this.props.route.params.data.cheesePrice !== undefined) {
      pizzaCheese = [
        {
          label: 'Extra cheese',
          value: {
            price: this.props.route.params.data.cheesePrice.extra,
            radioCheeseType: 'extra cheese',
          },
        },
        {
          label: 'Double cheese',
          value: {
            price: this.props.route.params.data.cheesePrice.double,
            radioCheeseType: 'double cheese',
          },
        },
        {
          label: 'Triple cheese',
          value: {
            price: this.props.route.params.data.cheesePrice.triple,
            radioCheeseType: 'triple cheese',
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

    return (
      <View style={pizzaDetailStyles.container}>
        <OvalShape />
        <View style={{marginTop: 10}}>
          <View style={pizzaDetailStyles.imageContainer}>
            <Image
              style={pizzaDetailStyles.image}
              source={{uri: this.props.route.params.data.imageSource}}
            />
          </View>
          <Text style={pizzaDetailStyles.pizzaTitle}>
            {this.props.route.params.data.title}
          </Text>
          <Text style={pizzaDetailStyles.pizzaDescription}>
            {this.props.route.params.data.description}
          </Text>
          {this.renderPrice()}
        </View>
        <ScrollView style={pizzaDetailStyles.scrollViewContainer}>
          <View>{this.renderSizeOptions(pizzaSize)}</View>
          <View>{this.renderCrustOptions(pizzaCrust)}</View>
          <View>{this.renderCheeseOptions(pizzaCheese)}</View>
          <Text style={pizzaDetailStyles.optionTitleText}> Quantity </Text>
          <View style={pizzaDetailStyles.quantityContainer}>
            <TouchableOpacity
              style={pizzaDetailStyles.quantityIcon}
              onPress={this.increaseQuantity}>
              <Icon name="plus-square" size={30} color={colors.ovalColor} />
            </TouchableOpacity>
            <Text style={pizzaDetailStyles.quantityText}>
              {this.state.quantity}
            </Text>
            <TouchableOpacity
              style={pizzaDetailStyles.quantityIcon}
              onPress={this.decreaseQuantity}>
              <Icon name="minus-square" size={30} color={colors.ovalColor} />
            </TouchableOpacity>
          </View>
          <View style={pizzaDetailStyles.priceContainer}>
            <Text style={pizzaDetailStyles.priceText}>
              Total : {this.numberWithCommas(this.state.totalPrice)}
            </Text>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity
            style={pizzaDetailStyles.addCartBtn}
            onPress={this.calculateTotalPrice}>
            <Text style={pizzaDetailStyles.addCartText}> ADD TO CART </Text>
            <Icon name="cart-arrow-down" size={20} color={colors.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
