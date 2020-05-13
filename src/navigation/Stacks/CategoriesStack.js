import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../../modules/view/Categories/Categories.screen';
import MyCart from '../../modules/view/Cart/MyCart.screen';
import ProductMenu from '../../modules/view/ProductMenu/ProductMenu.screen';
import ProductDetail from '../../modules/view/ProductDetail/ProductDetail.screen';
import Login from '../../modules/view/Login/Login.screen';
import SignUp from '../../modules/view/SignUp/SignUp.screen';
import CheckOut from '../../modules/view/CheckOut/CheckOut.screen';
import Shipping from '../../modules/view/Shipping/Shipping.screen';

import {View, TouchableOpacity} from 'react-native';
import HeaderIcon from '../../components/HeaderIcon/HeaderIcon.component';
import CartUseCase from '../../UseCase/CartUseCase';
import strings from '../../modules/resources/strings/strings';
import {Badge} from 'react-native-elements';

const Stack = createStackNavigator();

let badgeNum = 0;

export default class CategoriesStack extends Component {
  async componentDidUpdate() {
    let localCart = await new CartUseCase().getCurrentLocalCart();
    badgeNum = localCart.length;
  }
  async componentDidMount() {
    let localCart = await new CartUseCase().getCurrentLocalCart();
    badgeNum = localCart.length;
  }
  render() {
    return (
      <Stack.Navigator
        initialRouteName="categories"
        screenOptions={({navigation}) => ({
          title: null,
          headerTransparent: true,
          headerStyle: {},
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'bold',
          },
          headerLeft: navigation => (
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}>
              <HeaderIcon iconName={strings.categoriesScreen.iconBarsName} />
            </TouchableOpacity>
          ),
          headerRight: navigation => (
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('cart')}>
                <HeaderIcon iconName={strings.categoriesScreen.iconCartName} />
              </TouchableOpacity>
              {badgeNum > 0 ? (
                <Badge
                  status="success"
                  value={badgeNum}
                  containerStyle={{position: 'absolute', top: 5, right: 8}}
                />
              ) : null}
            </View>
          ),
        })}>
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="cart" component={MyCart} />
        <Stack.Screen name="productMenu" component={ProductMenu} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="shipping" component={Shipping} />
        <Stack.Screen name="checkout" component={CheckOut} />
      </Stack.Navigator>
    );
  }
}
