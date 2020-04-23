import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {setToken} from '../../../redux/actions.js';
import {setIsLoading, setCategoryData} from '../redux/actions.js';
import SplashScreen from '../screens/SplashScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import CategoryScreen from '../screens/CategoryScreen.js';
import PizzaProductListScreen from '../screens/PizzaProductListScreen.js';
import PastaProductListScreen from '../screens/PastaProductListScreen.js';
import SaladProductListScreen from '../screens/SaladProductListScreen.js';
import DessertProductListScreen from '../screens/DessertProductListScreen.js';
import BeverageProductListScreen from '../screens/BeverageProductListScreen.js';
import CartScreen from '../screens/CartScreen.js';
import LogInScreen from '../screens/LogInScreen.js';
import getAPI from '../repository/getAPI.js';

const Stack = createStackNavigator();

class AppStack extends Component {
  render() {
    const {isLoading} = this.props;
    if (isLoading) {
      return <SplashScreen />;
    }

    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Category Screen" component={CategoryScreen} />
        <Stack.Screen
          name="Pizza Product List Screen"
          component={PizzaProductListScreen}
        />
        <Stack.Screen
          name="Pasta Product List Screen"
          component={PastaProductListScreen}
        />
        <Stack.Screen
          name="Salad Product List Screen"
          component={SaladProductListScreen}
        />
        <Stack.Screen
          name="Dessert Product List Screen"
          component={DessertProductListScreen}
        />
        <Stack.Screen
          name="Beverage Product List Screen"
          component={BeverageProductListScreen}
        />
        <Stack.Screen name="Cart Screen" component={CartScreen} />
        <Stack.Screen name="Log In Screen" component={LogInScreen} />
      </Stack.Navigator>
    );
  }

  async componentDidMount() {
    try {
      let response = await getAPI('/category');
      this.props.setCategoryData(response.data);
    } catch (error) {
      console.log(error);
    }
    this.props.setIsLoading(false);
  }
}

AppStack.propTypes = {
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  setIsLoading: bool => dispatch(setIsLoading(bool)),
  setCategoryData: data => dispatch(setCategoryData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppStack);
