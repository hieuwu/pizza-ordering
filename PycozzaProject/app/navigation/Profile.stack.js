import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../views/ProductList/ProductList.screen';
import headerStyle from '../navigation/Header.style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../resources/colors'
import string from '../resources/strings'
import dimension from '../resources/dimensions'
import { StyleSheet } from 'react-native';
import ProductDetailScreen from '../views/ProductDetail/ProductDetail.screen';
import ProfileScreen from '../views/Profile/Profile.screen';
import CartScreen from '../views/Cart/Cart.screen';
import { connect } from 'react-redux';
import { Badge } from 'react-native-elements';
const stack = createStackNavigator();
 class ProfileStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: true,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cartReducer !== this.props.cartReducer) {
            const {cartReducer} = this.props;
            if (this.props.cartReducer.length > 0) {
                this.setState({isEmpty: false});
            }
            else this.setState({isEmpty: true});
        }
    }

    render() {
        const {cartReducer} = this.props;
        return (
            <stack.Navigator initialRouteName='Profile' screenOptions={headerStyle}>
                <stack.Screen name='Profile' component={ProfileScreen}
                    options={{
                        title: 'Profile',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Cart')}
                                style={styles.headerButton}>
                                <Ionicons name='ios-cart' color={color.white} size={dimension.iconSize} />
                                {(cartReducer.length < 0) ? (null) : ( <Badge
                                     value= {cartReducer.length}
                                    status="warning"
                                    containerStyle={{ position: 'absolute', left: 0, top: 0}}
                                />)}
                            </TouchableOpacity>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={styles.headerButton}>
                                <Ionicons name='ios-list' color={color.white} size={dimension.iconSize} />
                            </TouchableOpacity>
                        ),
                    }} />
                <stack.Screen name='Cart' component={CartScreen} options={{title: 'Detail'}}/>
            </stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    headerButton: {
        backgroundColor: color.mainColor,
        padding: 5,
        width: dimension.headerButton,
        height: dimension.headerButton,
        borderRadius: 64 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    }
})

const mapStateToProps = state => ({
    cartReducer: state.cartReducer,
});

const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileStack)