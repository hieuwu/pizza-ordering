import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCategoryData, setUserToken} from '../redux/actions.js';
import SplashScreen from '../screens/SplashScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import CategoryScreen from '../screens/CategoryScreen.js';
import ProductListScreen from '../screens/ProductListScreen.js';
import ProductDetailScreen from '../screens/ProductDetailScreen.js';
import CartScreen from '../screens/CartScreen.js';
import LogInScreen from '../screens/LogInScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import CheckOutScreen from '../screens/CheckOutScreen.js';
import ConfirmScreen from '../screens/ConfirmScreen.js';
import UserProfileScreen from '../screens/UserProfileScreen.js';
import ThankYouScreen from '../screens/ThankYouScreen.js';
import getAPI from '../repository/getAPI.js';

const Stack = createStackNavigator();

class AppStack extends Component {
  state = {
    isLoading: true,
  };

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <SplashScreen />;
    }

    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Category Screen" component={CategoryScreen} />
        <Stack.Screen
          name="Product List Screen"
          component={ProductListScreen}
        />
        <Stack.Screen
          name="Product Detail Screen"
          component={ProductDetailScreen}
        />
        <Stack.Screen name="Cart Screen" component={CartScreen} />
        <Stack.Screen name="Log In Screen" component={LogInScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
        <Stack.Screen name="Check Out Screen" component={CheckOutScreen} />
        <Stack.Screen name="Confirm Screen" component={ConfirmScreen} />
        <Stack.Screen
          name="User Profile Screen"
          component={UserProfileScreen}
        />
        <Stack.Screen name="Thank You Screen" component={ThankYouScreen} />
      </Stack.Navigator>
    );
  }

  async componentDidMount() {
    const {setCategoryData, setUserToken} = this.props;
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      let item = JSON.parse(userToken);
      setUserToken(item);
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
    try {
      let response = await getAPI('/category');
      setCategoryData(response.data);
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
    this.setState({isLoading: false});
  }
}

const mapDispatchToProps = dispatch => ({
  setCategoryData: data => dispatch(setCategoryData(data)),
  setUserToken: userToken => dispatch(setUserToken(userToken)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AppStack);
