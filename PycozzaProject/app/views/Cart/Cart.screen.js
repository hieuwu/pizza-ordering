import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage, Modal, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import color from '../../resources/colors';
import diemension from '../../resources/dimensions';
import ProductUseCase from '../../usecase/ProductUseCase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Cart/Cart.style';
import string from '../../resources/strings'
import OvalShape from '../../components/OvalShape.component';
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import dimension from '../../resources/dimensions';
import CartItem from '../../views/Cart/CartItem.component';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { removeFromCart, loadCart, saveCart } from '../../redux/actions/index';
import AppConfig from '../../config/AppConfig'
import CartUseCase from '../../usecase/CartUsceCase';
import UserUseCase from '../../usecase/UserUseCase'
import { addToCart, removeCart } from '../../redux/actions/index';
import { ADDTOCART } from '../../redux/actions/type';
import NetInfo from "@react-native-community/netinfo";

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isSignedIn: false,
            userAddress: '',
            noUserName: '',
            noUserPhone: '',
            noUserAddress: '',
            modalSucess: false,
            addressError: '',
            phoneError: '',
            nameError: '',
        }
    }



    removeItem = (item) => {
        const { removeFromCart } = this.props;
        let orderLine = {};
        orderLine.id = item.id;
        removeFromCart(orderLine);
    }

    loadCart = () => {
        const { loadCart } = this.props;
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
        const { addToCart } = this.props;
        const { cartReducer } = this.props;
        if (cartReducer.length == 0) {
            let newState = await new CartUseCase().getCart();
            if (newState == 'none') {
                return;
            }
            newState.forEach(element => {
                element.type = ADDTOCART;
                addToCart(element);
            })
        }

    }

    gotoAuthenn = () => {
        const { navigation } = this.props;
        this.setState({ modalVisible: false })
        navigation.navigate('LoginScreen');
    }

    checkPhoneNumber = () => {
        let validateInstance = new UserUseCase();
        if (validateInstance.isValidPhoneNumber(this.state.noUserPhone)) {
            this.setState({ phoneError: '' });

        } else {
            this.setState({ phoneError: '  Invalid phone!' });
        }
    }

    checkName = () => {
        if (this.state.noUserName.length > 1) {
            this.setState({ nameError: '' });
        } else {
            this.setState({ nameError: '  Invalid name!' });
        }
    }

    checkAddress = () => {
        if (this.state.userAddress.length > 5) {
            this.setState({ addressError: '' });
        } else {
            this.setState({ addressError: '  Invalid address!' });
        }
    }

    createOrderRequest = async () => {
        let orderRequest = {};
        let cart = [];
        let notUserInfor = {};
        const { userReducer } = this.props;
        const { cartReducer } = this.props;
        if (this.state.isSignedIn === true) {

            orderRequest.email = userReducer.email;
            orderRequest.orderUserInformation = {
                fullName: userReducer.fullName,
                phone: userReducer.phone,
                emai: userReducer.email,
                address: this.state.userAddress
            };
        }
        else {
            orderRequest.email = '';
            notUserInfor = {
                fullName: this.state.noUserName,
                phone: this.state.noUserPhone,
                email: '',
                address: this.state.userAddress,
            }
            orderRequest.orderUserInformation = notUserInfor;
        }
        cartReducer.forEach(element => {
            let name = element.name + '' + element.size + '' + element.crust;
            let quantity = Number(element.quantity)
            let price = Number(element.price);
            cart.push({ name: name, quantity: quantity, price })
        })
        orderRequest.note = '';
        orderRequest.cart = cart;
        orderRequest.orderTime = new Date().toDateString();
        orderRequest.paymentMethod = 'COD';
        orderRequest.totalPrice = this.countMoney();
        let orderStatus = await new UserUseCase().completeOrder(orderRequest);
        if (orderStatus == 201) {
            const { removeCart } = this.props;
            await new CartUseCase().removeCart();
            this.setState({ modalSucess: true });
            removeCart();
        }
    }

    async goCheckOut() {
        const { cartReducer } = this.props;
        if (cartReducer.length > 0) {
            NetInfo.fetch().then(async state => {
                if (state.isConnected == false) {
                    alert("You are offline, can not order !")
                    return;
                }
                else {
                    let currentUser = await new UserUseCase().getUserInformation();
                    if (currentUser == 'none') {
                        //If not logged in
                        //show information dialog
                        this.setState({ isSignedIn: false });
                        this.setState({ modalVisible: true });
                    }
                    else {
                        //If logged in
                        //show address dialog
                        this.setState({ isSignedIn: true });
                        this.setState({ modalVisible: true })
                    }
                }
            })
            
        }
        else {
            alert('Your cart is empty')
            return;
        }
    }

    render() {
        const { cartReducer } = this.props;
        const totalPrice = this.countMoney();
        return (
            <View style={styles.container}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalSucess}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1, }}>
                        <View style={styles.modalViewSuccess}>
                            <Text style={styles.textStyle}>Your order is sent successfully !</Text>
                            <Button
                                title='OK'
                                buttonStyle={styles.okButton}
                                onPress={() => {
                                    this.setState({ modalSucess: false });
                                    this.props.navigation.navigate('ProductList');
                                }}
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>

                {
                    this.state.isSignedIn ? (<Modal animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
                            <View style={styles.modalViewMember}>
                                <Text style={styles.textStyle}>{string.promptAddress}</Text>
                                <Input inputContainerStyle={styles.textInput}
                                    placeholder={string.promptAddress}
                                    onChangeText={text => this.setState({ userAddress: text })}
                                    errorMessage={this.state.addressError}
                                    errorStyle={{ marginHorizontal: 15 }}
                                />
                                <View style={{ flexDirection: 'row', }}>
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
                                            let userInstance = new UserUseCase();
                                            this.checkAddress(this.state.userAddress);
                                            if (userInstance.isValidAddress(this.state.userAddress)) {
                                                this.createOrderRequest();
                                                this.setState({ modalVisible: false });
                                                this.setState({ modalSucess: true });
                                            }

                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                    ) :
                        (
                            <Modal animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}>
                                <View style={{ justifyContent: 'center', alignSelf: 'center',
                             flex: 1 }}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.textStyle}>{string.promptFullName}</Text>
                                        <Input inputContainerStyle={styles.textInput}
                                            placeholder={string.promptFullName}
                                            onChangeText={text => this.setState({ noUserName: text })}
                                            errorMessage={this.state.nameError}
                                        />
                                        <Text style={styles.textStyle}>{string.promptPhone}</Text>
                                        <Input inputContainerStyle={styles.textInput}
                                            placeholder={string.promptPhone}
                                            onChangeText={text => this.setState({ noUserPhone: text })}
                                            errorMessage={this.state.phoneError}

                                        />
                                        <Text style={styles.textStyle}>{string.promptAddress}</Text>
                                        <Input inputContainerStyle={styles.textInput}
                                            placeholder={string.promptAddress}
                                            onChangeText={text => this.setState({ userAddress: text })}
                                            errorMessage={this.state.addressError}
                                        />
                                        <Text style={styles.textStyle}>or</Text>
                                        <TouchableOpacity
                                            onPress={() => this.gotoAuthenn()}
                                            style={styles.touchButton}>
                                            <Text style={styles.textButton}>{string.promptMember}</Text>
                                        </TouchableOpacity>
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
                                                    let userInstance = new UserUseCase();
                                                    this.checkName();
                                                    this.checkPhoneNumber();
                                                    this.checkAddress();
                                                    if (userInstance.isValidName(this.state.noUserName)
                                                        && userInstance.isValidPhoneNumber(this.state.noUserPhone)
                                                        && userInstance.isValidAddress(this.state.userAddress)) {
                                                        this.createOrderRequest();
                                                        this.setState({ modalVisible: false });
                                                    }
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        )
                }
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
                     {(this.state.modalVisible || this.state.modalSucess) ? (<View style={{
                    backgroundColor: 'rgba(52, 52, 52, 0.8)', position: 'absolute',
                    height: dimension.window.height, width: dimension.window.width
                }} />) : (null)
                }
            </View>
        )
    }
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer,
    userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: orderLine => dispatch(removeFromCart(orderLine)),
    addToCart: orderLine => dispatch(addToCart(orderLine)),
    removeCart: () => dispatch(removeCart())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)