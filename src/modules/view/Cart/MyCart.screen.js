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

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: 'My Cart',
      headerTransparent: true,
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
      headerLeft: navigation => (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <HeaderIcon iconName="arrow-left" />
        </TouchableOpacity>
      ),
      headerRight: null,
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
      </View>
    </View>
  );

  summaryPrice = () => {
    const {jobs} = this.props;
    let totalPrice = 0;

    if (jobs.length > 0) {
      jobs.forEach(element => {
        totalPrice += element.totalPrice;
      });
    } else {
      totalPrice = 0;
    }
    return totalPrice;
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  removeCartLine = item => {
    const {removeItemFromCart} = this.props;
    let cartLine = {};
    cartLine.id = item.id;
    removeItemFromCart(cartLine);
  };

  render() {
    const {jobs} = this.props;
    const totalPrice = this.summaryPrice();
    return (
      <View style={cartStyles.container}>
        <OvalShape />
        <FlatList
          style={cartStyles.mainViewContainer}
          data={jobs}
          renderItem={this.renderCartItem}
          keyExtractor={item => item.id}
        />
        <View style={cartStyles.totalPriceContainer}>
          <Text style={cartStyles.priceText}>
            {jobs.length} items / Total cost $
            {this.numberWithCommas(totalPrice)}
          </Text>
          <TouchableOpacity
            style={cartStyles.checkOutBtn}
            onPress={() => this.props.navigation.navigate('login')}>
            <Text style={cartStyles.checkOutBtnText}> CHECK OUT </Text>
            <Icon name="arrow-circle-right" size={35} color={colors.icon} />
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
  removeItemFromCart: cartLine => dispatch(removeItemFromCart(cartLine)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyCart);
