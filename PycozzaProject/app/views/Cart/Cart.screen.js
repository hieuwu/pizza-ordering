import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage, Modal } from 'react-native';
import color from '../../resources/colors';
import diemension from '../../resources/dimensions';
import ProductUseCase from '../../usecase/ProductUseCase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Cart/Cart.style';
import string from '../../resources/strings'
import OvalShape from '../../components/OvalShape.component';
import { Button, Input } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import dimension from '../../resources/dimensions';
import CartItem from '../../views/Cart/CartItem.component';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { removeFromCart,loadCart,saveCart } from '../../redux/actions/index';
import AppConfig from '../../config/AppConfig'
import CartUseCase from '../../usecase/CartUsceCase';
import { addToCart } from '../../redux/actions/index';
import { ADDTOCART } from '../../redux/actions/type';

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    removeItem = (item) => {
        const { removeFromCart } = this.props;
        let orderLine = {};
        orderLine.id = item.id;
        console.log('Clicked ID: ', orderLine.id);
        removeFromCart(orderLine);
        this.setState({ total: this.countMoney() })
    }
    
    loadCart = () => {
        const {loadCart} = this.props;
        loadCart();
    }

    countMoney = () => {
        const { cartReducer } = this.props;
        if (cartReducer.length == 0) {
            return 0;
        }
        let sum = 0;
        cartReducer.forEach(element => {
            sum += element.price * element.quantity;
        });
        return sum;
    }

    renderProductItem = ({ item }) => {
        return (
            <CartItem item={item} deleteItem={() => this.removeItem(item)} />
        )
    }


    async componentDidMount() {
        const {addToCart} = this.props;
        const {cartReducer} = this.props;
        if (cartReducer.length == 0) {
            let newState = await new CartUseCase().getCart();
            if (newState == 'none') {
                console.log('cart is None')
                return;
            }
            console.log("Curr cart in CartScreen: ", newState);
            newState.forEach(element => {
                element.type = ADDTOCART;
                addToCart(element);
            })
        }
       
        
    }
    gotoAuthenn = () => {
        const { navigation } = this.props;
        navigation.navigate('LoginScreen');
    }
    async goCheckOut() {
        const { cartReducer } = this.props;
        if (cartReducer.length > 0) {
            this.setState({ modalVisible: true })
            // let userId = '';
            // try {
            //     userId = await AsyncStorage.getItem('mycart') || 'none';
            // } catch (error) {
            //     // Error retrieving data
            //     console.log(error.message);
            // }
            // if (userId !== 'none')
            //     console.log("Da dang nhap");

            // else {
            //     console.log("Chua dang nhap")
            //     this.gotoAuthenn();

            // }
        }
        else {
            alert('Your cart is empty')
        }

    }

    render() {
        const { cartReducer } = this.props;
        const totalPrice = this.countMoney();
        return (
            <View style={styles.container}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1, }}>
                        <View style={styles.modalView}>
                            <Text style={styles.textStyle}>{string.promptAddress}</Text>
                            <Input inputContainerStyle={styles.textInput}
                                placeholder={string.promptAddress}
                                errorMessage={this.state.phoneError} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Button
                                    title='Cancel'
                                    buttonStyle={styles.cancelButton}
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                    }}
                                />

                                <Button
                                    title='OK'
                                    buttonStyle={styles.okButton}
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                    }}
                                />

                            </View>
                        </View>
                    </View>
                </Modal>
                <OvalShape />
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerTitle}>{cartReducer.length} {string.promptItemCost} {totalPrice + ',000'} {string.currency}</Text>
                    </View>
                    {totalPrice ? (<View style={styles.listWraper}>
                        <FlatList data={cartReducer} renderItem={this.renderProductItem}
                            keyExtractor={(productInfo) => productInfo.id} />
                    </View>) :
                        (<View style={styles.emptyCart}>
                            <Text style={styles.emptyPrompt}>{string.propmptEmptyCart}</Text>
                        </View>)
                    }
                    <View style={styles.dottedLine}></View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.promptText}>{string.promptTotal}</Text>
                        <Text style={styles.price}>{totalPrice + ',000'} {string.currency}</Text>
                    </View>
                </View>
                <Button title={string.buttonCheckOut}
                    onPress={() => this.goCheckOut()}
                    icon={
                        <Icon
                            name="arrow-right"
                            size={dimension.iconSize}
                            color="white"
                            style={{ marginLeft: 120 }}
                        />
                    }
                    titleStyle={{ justifyContent: 'center', fontWeight: 'bold' }}
                    iconRight
                    buttonStyle={styles.buttonCheckOut} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: orderLine => dispatch(removeFromCart(orderLine)),
    loadCart: () => dispatch(loadCart()),
    addToCart: orderLine => dispatch(addToCart(orderLine)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)