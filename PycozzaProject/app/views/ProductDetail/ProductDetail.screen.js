import React, { Component } from 'react'
import { Text, View, Image, } from 'react-native'
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

let i = 1
class ProductDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeChecked: false,
            crustChecked: false,
            quantity: 1,
            size: 'L',
            crust: 'Thick',
        }
    }
    mediumSizeChecked = () => {
        this.setState({ sizeChecked: true });
        this.setState({ size: 'M' });
        console.log("M")
    }
    largeSizeChecked = () => {
        this.setState({ sizeChecked: false });
        this.setState({ size: 'L' });
        console.log("L");
    }
    thinCrustChecked = () => {
        this.setState({ crustChecked: true });
        this.setState({ crust: 'Thin' });
        console.log("Thin crust");
    }
    thickCrustChecked = () => {
        this.setState({ crustChecked: false });
        this.setState({ crust: 'Thick' });
        console.log("Think crust");
    }

    createOrderLine = () => {
        console.log('1');
        const {addToCart} = this.props;
        let orderLine = {};
        orderLine.type = 'ADD_TODO'
        orderLine.id = i++;
        orderLine.text = 'Test';
        addToCart(orderLine);
    }

    render() {
        const { item } = this.props.route.params;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <OvalShape />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 200, height: 200, borderRadius: 200 / 2, resizeMode: 'contain' }} source={{ uri: JSON.stringify(item.imageURL).replace(/['"]+/g, '') }} />
                        <Text style={styles.productTitle}>{JSON.stringify(item.name).replace(/['"]+/g, '')}</Text>
                        <Text style={styles.priceTitle}>{JSON.stringify(item.price).replace(/['"]+/g, '')} VNĐ</Text>
                    </View>
                    <View style={{ marginHorizontal: 15, }}>
                        <Text style={styles.subTitle}>Description:</Text>
                        <Text style={styles.content}>A large disc of dough, covered with tomato paste, then either only grated cheese or pieces of mozzarella cheese, or other toppings like chopped vegetables, sausages, salami, </Text>
                    </View>
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
                    <View style={{ marginHorizontal: 15, }}>
                        <Text style={styles.subTitle}>Quantity:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, }}>
                            <TouchableOpacity onPress={() => this.setState({ quantity: i-- })}>
                                <AntDesign name='minuscircleo' color={color.black} size={dimension.iconSize} />
                            </TouchableOpacity>
                            <Text style={styles.subTitle} >{this.state.quantity}</Text>
                            <TouchableOpacity onPress={() => this.setState({ quantity: i++ })}><AntDesign name='pluscircleo' color={color.black} size={dimension.iconSize} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Button onPress={
                    this.createOrderLine} title={string.buttonAddToCart} buttonStyle={styles.addCart} />
            </View>
        )
    }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addToCart: orderLine => dispatch(addToCart(orderLine))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetailScreen)