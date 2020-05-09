import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../../modules/resources/colors/Colors';

import CategoriesStack from '../Stacks/CategoriesStack';
import CartStack from '../Stacks/CartStack';
import PizzaMenuStack from '../Stacks/PizzaMenuStack';
import CustomDrawer from './CustomDrawer';
import {connect} from 'react-redux';
import UserUseCase from '../../UseCase/UserUseCase';

const Drawer = createDrawerNavigator();

class MainDrawer extends Component {
  renderSignOutOrSignIn = () => {
    const {userReducer} = this.props;
    console.log(userReducer);
    if (userReducer === null) {
      return;
    }
  };
  render() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: colors.mainRed,
          width: '60%',
        }}
        drawerContentOptions={{
          labelStyle: {
            fontSize: 20,
            color: colors.white,
          },
        }}>
        <Drawer.Screen name="Home" component={CategoriesStack} />
        <Drawer.Screen name="PizzaMenu" component={PizzaMenuStack} />
        <Drawer.Screen name="Cart" component={CartStack} />
      </Drawer.Navigator>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainDrawer);
