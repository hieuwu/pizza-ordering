import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import pizzaDetailStyles from './PizzaDetail.style';
import colors from '../../resources/colors/Colors';

import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';

const singleData = {
  title: 'PRIME BEEF',
  imageUrl: 'https://dominos.vn/Data/Sites/1/Product/577/prime-beef-full.png',
  description:
    'Mozzarella cheese, Pizza Sauce, Onion, Tomato, Cheese Sauce, Meat ball, Mexico Beef',
  cheese: true,
};

let pizzaSize = [
  {label: 'Large', value: 'large'},
  {label: 'Medium', value: 'medium'},
];
let pizzaCrust = [
  {label: 'Thin Crust', value: 'thin'},
  {label: 'Hand Tossed Crust', value: 'handTossed'},
  {label: 'New York Crust', value: 'newYork'},
];
let pizzaCheese = [
  {label: 'Extra cheese', value: 'extra'},
  {label: 'Double cheese', value: 'double'},
  {label: 'Triple cheese', value: 'triple'},
];

export default class PizzaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      sizeType: 'large',
      crustType: 'thin',
      cheeseType: 'extra',
      quantity: 0,
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
        this.setState({data: singleData});
        console.log(singleData);
        // let .... return data
        break;
      default:
        break;
    }
  }

  renderCheeseOptions = () => {
    if (this.state.data.cheese) {
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
                this.setState({cheeseType: value});
              }}
            />
            <Text> current cheese : {this.state.cheeseType}</Text>
          </View>
        </View>
      );
    }
  };

  increaseQuantity = () => {
    this.setState({quantity: this.state.quantity + 1});
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1});
    }
  };

  render() {
    return (
      <View style={pizzaDetailStyles.container}>
        <OvalShape />
        <View style={{marginTop: 60}}>
          <View style={pizzaDetailStyles.imageContainer}>
            <Image
              style={pizzaDetailStyles.image}
              source={{uri: this.state.data.imageUrl}}
            />
            <Text style={pizzaDetailStyles.pizzaTitle}>
              {this.state.data.title}
            </Text>
          </View>
          <Text style={pizzaDetailStyles.pizzaDescription}>
            {this.state.data.description}
          </Text>
        </View>
        <ScrollView style={pizzaDetailStyles.scrollViewContainer}>
          <Text style={pizzaDetailStyles.optionTitleText}> Size </Text>
          <View style={pizzaDetailStyles.radioContainer}>
            <RadioForm
              formHorizontal={true}
              buttonColor={colors.ovalColor}
              selectedButtonColor={colors.ovalColor}
              radio_props={pizzaSize}
              style={pizzaDetailStyles.radioHorizontalForm}
              initial={-1}
              onPress={value => {
                this.setState({sizeType: value});
              }}
            />
            <Text> current size : {this.state.sizeType}</Text>
          </View>
          <Text style={pizzaDetailStyles.optionTitleText}> Crust </Text>
          <View style={pizzaDetailStyles.radioContainer}>
            <RadioForm
              formHorizontal={false}
              buttonColor={colors.ovalColor}
              selectedButtonColor={colors.ovalColor}
              radio_props={pizzaCrust}
              style={pizzaDetailStyles.radioVerticalForm}
              initial={-1}
              onPress={value => {
                this.setState({crustType: value});
              }}
            />
            <Text> current crust : {this.state.crustType}</Text>
          </View>
          <View>{this.renderCheeseOptions()}</View>
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
        </ScrollView>
        <TouchableOpacity style={pizzaDetailStyles.addCartBtn}>
          <Text style={pizzaDetailStyles.addCartText}> ADD TO CART </Text>
          <Icon name="cart-arrow-down" size={20} color={colors.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
