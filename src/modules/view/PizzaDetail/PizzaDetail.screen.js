import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  CheckBox,
} from 'react-native';
import pizzaDetailStyles from './PizzaDetail.style';
import colors from '../../resources/colors/Colors';

import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import Icon from 'react-native-vector-icons/FontAwesome';

const singleData = {
  title: 'PRIME BEEF',
  imageUrl: 'https://dominos.vn/Data/Sites/1/Product/577/prime-beef-full.png',
  description:
    'Mozzarella cheese, Pizza Sauce, Onion, Tomato, Cheese Sauce, Meat ball, Mexico Beef',
  cheese: true,
};

export default class PizzaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      largeSize: false,
      mediumSize: false,
      thinCrust: false,
      handTossed: false,
      newYorkCurst: false,
      extraCheese: false,
      doubleCheese: false,
      tripleCheese: false,
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
          <View style={pizzaDetailStyles.verticalOptionContainer}>
            <View style={pizzaDetailStyles.cheeseContainer}>
              <View style={pizzaDetailStyles.checkBoxContainer}>
                <CheckBox
                  value={this.state.extraCheese}
                  onValueChange={() =>
                    this.setState({extraCheese: !this.state.extraCheese})
                  }
                />
                <Text> Extra Cheese </Text>
              </View>
              <Text> $20.00 </Text>
            </View>
            <View style={pizzaDetailStyles.cheeseContainer}>
              <View style={pizzaDetailStyles.checkBoxContainer}>
                <CheckBox
                  value={this.state.doubleCheese}
                  onValueChange={() =>
                    this.setState({doubleCheese: !this.state.doubleCheese})
                  }
                />
                <Text> Double Cheese </Text>
              </View>
              <Text> $13.00 </Text>
            </View>
            <View style={pizzaDetailStyles.cheeseContainer}>
              <View style={pizzaDetailStyles.checkBoxContainer}>
                <CheckBox
                  value={this.state.tripleCheese}
                  onValueChange={() =>
                    this.setState({tripleCheese: !this.state.tripleCheese})
                  }
                />
                <Text> Triple Cheese </Text>
              </View>
              <Text> $6.00 </Text>
            </View>
          </View>
        </View>
      );
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
          <View style={pizzaDetailStyles.sizeOptionContainer}>
            <View style={pizzaDetailStyles.checkBoxContainer}>
              <CheckBox
                value={this.state.largeSize}
                onValueChange={() =>
                  this.setState({largeSize: !this.state.largeSize})
                }
              />
              <Text> Large size </Text>
            </View>
            <View style={pizzaDetailStyles.checkBoxContainer}>
              <CheckBox
                value={this.state.mediumSize}
                onValueChange={() =>
                  this.setState({mediumSize: !this.state.mediumSize})
                }
              />
              <Text> Medium size </Text>
            </View>
          </View>
          <Text style={pizzaDetailStyles.optionTitleText}> Crust </Text>
          <View style={pizzaDetailStyles.verticalOptionContainer}>
            <View style={pizzaDetailStyles.checkBoxContainer}>
              <CheckBox
                value={this.state.thinCrust}
                onValueChange={() =>
                  this.setState({thinCrust: !this.state.thinCrust})
                }
              />
              <Text> Thin Crust </Text>
            </View>
            <View style={pizzaDetailStyles.checkBoxContainer}>
              <CheckBox
                value={this.state.handTossed}
                onValueChange={() =>
                  this.setState({handTossed: !this.state.handTossed})
                }
              />
              <Text> Hand Tossed </Text>
            </View>
            <View style={pizzaDetailStyles.checkBoxContainer}>
              <CheckBox
                value={this.state.newYorkCurst}
                onValueChange={() =>
                  this.setState({newYorkCurst: !this.state.newYorkCurst})
                }
              />
              <Text> New York Curst </Text>
            </View>
          </View>
          <View>{this.renderCheeseOptions()}</View>
        </ScrollView>
        <TouchableOpacity style={pizzaDetailStyles.addCartBtn}>
          <Text style={pizzaDetailStyles.addCartText}> ADD TO CART </Text>
          <Icon name="cart-arrow-down" size={20} color={colors.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
