import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import cartStyles from './MyCart.styles';

import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../resources/colors/Colors';

import CartItem from '../../../components/CartItem/CartItem.component';
import {connect} from 'react-redux';
import {removeItemFromCart} from '../../../redux/actions/index';

const listCart = [
  {
    id: 1,
    title: 'PRIME BEEF',
    imageUrl: 'https://dominos.vn/Data/Sites/1/Product/577/prime-beef-full.png',
    sizeType: '12 inch',
    crustType: 'thin crust',
    cheeseType: 'extra cheese',
    quantity: 1,
    totalPrice: 209000,
  },
  {
    id: 2,
    title: 'SINGAPORE STYLE SEAFOOD',
    imageUrl:
      'https://dominos.vn/Data/Sites/1/Product/576/sing-seafood2-full.png',
    sizeType: '12 inch',
    crustType: 'thin crust',
    cheeseType: 'extra cheese',
    quantity: 1,
    totalPrice: 893000,
  },
  {
    id: 3,
    title: 'NEW YORK STYLE SEAFOOD',
    imageUrl:
      'https://dominos.vn/Data/Sites/1/Product/576/sing-seafood2-full.png',
    sizeType: '12 inch',
    crustType: 'thin crust',
    cheeseType: 'extra cheese',
    quantity: 1,
    totalPrice: 345000,
  },
  {
    id: 4,
    title: 'PIZZA 04',
    imageUrl:
      'https://dominos.vn/Data/Sites/1/Product/576/sing-seafood2-full.png',
    sizeType: '12 inch',
    crustType: 'thin crust',
    cheeseType: 'extra cheese',
    quantity: 1,
    totalPrice: 1540000,
  },
  {
    id: 5,
    title: 'PIZZA 05',
    imageUrl:
      'https://dominos.vn/Data/Sites/1/Product/576/sing-seafood2-full.png',
    sizeType: '12 inch',
    crustType: 'thin crust',
    cheeseType: 'extra cheese',
    quantity: 1,
    totalPrice: 235000,
  },
];

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {data: listCart};
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
  }

  renderCartItem = ({item}) => (
    <View style={cartStyles.cartLineContainer}>
      <CartItem
        pizzaTitle={item.title}
        imageUrl={item.imageUrl}
        pizzaSize={item.sizeType}
        pizzaCrust={item.crustType}
        pizzaCheese={item.cheeseType}
        quantity={item.quantity}
        totalPrice={item.totalPrice}
      />
      <View style={cartStyles.iconContainer}>
        <TouchableOpacity onPress={() => this.removeCartLine(item)}>
          <Icon name="times" size={30} color={colors.ovalColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={30} color={colors.ovalColor} />
        </TouchableOpacity>
      </View>
    </View>
  );

  removeCartLine = item => {
    const {removeItemFromCart} = this.props;
    let cartLine = {};
    cartLine.id = item.id;
    removeItemFromCart(cartLine);
  };

  render() {
    const {jobs} = this.props;
    return (
      <View style={cartStyles.container}>
        <OvalShape />
        <FlatList
          style={cartStyles.mainViewContainer}
          data={jobs}
          renderItem={this.renderCartItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={cartStyles.checkOutBtn}
          onPress={() => console.log('check out ')}>
          <Text style={cartStyles.checkOutBtnText}> CHECK OUT </Text>
          <Icon name="arrow-circle-right" size={35} color={colors.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: cartLine => dispatch(removeItemFromCart(cartLine)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyCart);
