import React, { Component } from 'react'
import { Text, View, Image, Modal } from 'react-native'
import OvalShape from '../../components/OvalShape.component'
import styles from '../../views/ProductDetail/ProductDetail.style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { CheckBox, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../../resources/colors';
import dimension from '../../resources/dimensions';
import string from '../../resources/strings';
import store from '../../redux/store';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/index';
import AppConfig from '../../config/AppConfig';
import { saveCart } from '../../redux/actions/index';
import CartUseCase from '../../usecase/CartUsceCase';
import ADDTOCART from '../../redux/actions/type'
let i = 1;
let id = 0;
let cartID = 0;

class ProductDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeChecked: false,
            crustChecked: false,
            quantity: 1,
            size: 'L',
            crust: 'Thick',
            isPizza: false,
            modalVisible: false,
        }
    }
    mediumSizeChecked = () => {
        this.setState({ sizeChecked: true });
        this.setState({ size: 'M' });
    }
    largeSizeChecked = () => {
        this.setState({ sizeChecked: false });
        this.setState({ size: 'L' });
    }
    thinCrustChecked = () => {
        this.setState({ crustChecked: true });
        this.setState({ crust: 'Thin' });
    }
    thickCrustChecked = () => {
        this.setState({ crustChecked: false });
        this.setState({ crust: 'Thick' });
    }
    getParam = () => {
        const { item } = this.props.route.params;
        let param = {};
        param.id = JSON.stringify(item.id).replace(/['"]+/g, '');
        param.name = JSON.stringify(item.name).replace(/['"]+/g, '');
        param.imgLink = JSON.stringify(item.imgLink).replace(/['"]+/g, '');
        param.price = JSON.stringify(item.price).replace(/['"]+/g, '');
        param.maxPrice = JSON.stringify(item.maxPrice).replace(/['"]+/g, '');
        param.description = JSON.stringify(item.description).replace(/['"]+/g, '');
        return param;
    }

    createOrderLine = async () => {
        const { addToCart } = this.props;
        const { cartReducer } = this.props;
        const { saveCart } = this.props;
        const item = this.getParam();
        i = 0;
        let orderLine = {};
        orderLine.type = 'ADD_CART';
        orderLine.id = String(cartID);
        orderLine.name = item.name;
        if (this.state.size === 'M') {
            orderLine.price = item.price;
        } else {
            orderLine.price = item.maxPrice;
            if (item.maxPrice <= 0) {
                orderLine.price = item.price;
            }
        }
        orderLine.quantity = this.state.quantity;
        orderLine.size = this.state.size;
        orderLine.crust = this.state.crust;
        orderLine.imgLink = item.imgLink;
        this.setState({ modalVisible: true });
        addToCart(orderLine);
        saveCart();
        cartID = cartID + 1;
    }

    async componentDidMount() {
        const { title } = this.props.route.params;
        if (title == 'Pizza') {
            this.setState({ isPizza: true })
        }
    }

    render() {
        const item = this.getParam();
        return (
            <View style={styles.container}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1, }}>
                        <View style={styles.modalView}>
                            <Text style={styles.textStyle}>Add to cart successfully !</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Button
                                    title='Continue'
                                    buttonStyle={styles.okButton}
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                        this.setState({ quantity: 1 });
                                        this.props.navigation.goBack();
                                    }}
                                >
                                </Button>
                                <Button
                                    title='Check out'
                                    buttonStyle={styles.okButton}
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                        this.setState({ quantity: 1 });
                                        this.props.navigation.navigate('CartScreen');
                                    }}
                                ></Button>

                            </View>

                        </View>
                    </View>
                </Modal>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <OvalShape />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 200, height: 200, borderRadius: 200 / 2, resizeMode: 'contain' }} source={{ uri: AppConfig.IMAGE.baseURL + item.imgLink }} />
                       <Text style={styles.productTitle}>{item.name}</Text>
                       <View style={{flexDirection: 'row'}}>
                        <Text style={styles.priceTitle}>{item.price + ',000'}</Text>
                        {
                            this.state.isPizza ? (
                            <View><Text style={styles.priceTitle}>  - {item.maxPrice + ',000'}</Text>
                            
                            </View>) : (null)
                        }
                       
                        <Text style={styles.priceTitle}> VNĐ</Text>
                       </View>        
                    </View>
                    <View style={{ marginHorizontal: 15, }}>
                        {
                             this.state.isPizza ? ( <View><Text style={styles.subTitle}>Description:</Text>
                                <Text style={styles.content}>{item.description} </Text></View>) : (null)
                        }

                       
                    </View>
                    {
                        this.state.isPizza ? (
                            <View>
                                <View style={{ marginHorizontal: 15, }}>
                                    <Text style={[styles.subTitle, { marginTop: 15 }]}>Size:</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                        <CheckBox
                                            center
                                            containerStyle={{ backgroundColor: 'transparent' }}
                                            title='M'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={this.state.sizeChecked}
                                            onPress={this.mediumSizeChecked}
                                        />
                                        <CheckBox
                                            center
                                            containerStyle={{ backgroundColor: 'transparent' }}
                                            title='L'
                                            checkedIcon='dot-circle-o'
                                            checked={!this.state.sizeChecked}
                                            onPress={this.largeSizeChecked}
                                            uncheckedIcon='circle-o'
                                        />
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: 15, }}>
                                    <Text style={styles.subTitle}>Crust:</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                        <CheckBox
                                            center
                                            containerStyle={{ backgroundColor: 'transparent' }}
                                            title='Thin'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={this.state.crustChecked}
                                            onPress={this.thinCrustChecked}
                                        />
                                        <CheckBox
                                            center
                                            containerStyle={{ backgroundColor: 'transparent' }}
                                            title='Thick'
                                            checkedIcon='dot-circle-o'
                                            checked={!this.state.crustChecked}
                                            onPress={this.thickCrustChecked}
                                            uncheckedIcon='circle-o'
                                        />
                                    </View>
                                </View>
                            </View>
                        ) : null
                    }
                    <View style={{ marginHorizontal: 15, }}>
                        <Text style={styles.subTitle}>Quantity:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, }}>
                            <TouchableOpacity onPress={() => {
                                if (this.state.quantity > 1) {
                                    i--;
                                    this.setState({ quantity: i })
                                } else return;
                            }}>
                                <AntDesign name='minuscircleo' color={color.black} size={dimension.iconSize} />
                            </TouchableOpacity>
                            <Text style={styles.subTitle} >{this.state.quantity}</Text>
                            <TouchableOpacity onPress={() => {
                                i++;
                                this.setState({ quantity: i })
                            }}><AntDesign name='pluscircleo' color={color.black} size={dimension.iconSize} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Button onPress={
                    this.createOrderLine} title={string.buttonAddToCart} buttonStyle={styles.addCart} />
                {this.state.modalVisible ? (<View style={{
                    backgroundColor: 'rgba(52, 52, 52, 0.8)', position: 'absolute',
                    height: dimension.window.height, width: dimension.window.width
                }} />) : (null)
                }


            </View>
        )
    }
}
const mapStateToProps = state => ({
    cartReducer: state.cartReducer
});

const mapDispatchToProps = dispatch => ({
    addToCart: orderLine => dispatch(addToCart(orderLine)),
    saveCart: () => dispatch(saveCart())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetailScreen)