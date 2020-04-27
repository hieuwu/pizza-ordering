import React, { Component, useState } from 'react'
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
import cartReducer from '../../redux/reducers/cartReducer';
import {ADDTOCART, REMOVEFROMCART} from '../../redux/actions/type';

let i = 1
export default function ProductDetailScreen({ route, navigation }) {
    const [sizeChecked, setSizeChecked] = useState(false);
    const [crustChecked, setCrustChecked] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('L');
    const [crust, setCrust] = useState('Thick');
    const { item } = route.params;
    const myStore  =  store;


    function mediumSizeChecked() {
        setSizeChecked(true);
        setSize('M')
        console.log("M")
    }
    function largeSizeChecked() {
        setSizeChecked(false);
        setSize('L');
        console.log("L");
    }
    function thinCrustChecked() {
        setCrustChecked(true);
        setCrust('Thin');
        console.log("Thin crust");
    }
    function thickCrustChecked() {
        setCrustChecked(false);
        setCrust('Thick');
        console.log("Think crust");
    }
    function showDetail() {
        let allDetail = { ...item };
        allDetail.size = size,
            allDetail.crust = crust,
            allDetail.quantity = 4,
            console.log(allDetail);
    }
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
                            checked={sizeChecked}
                            onPress={mediumSizeChecked}
                        />
                        <CheckBox
                            center
                            containerStyle={{ backgroundColor: 'transparent' }}
                            title='L'
                            checkedIcon='dot-circle-o'
                            checked={!sizeChecked}
                            onPress={largeSizeChecked}
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
                            checked={crustChecked}
                            onPress={thinCrustChecked}
                        />
                        <CheckBox
                            center
                            containerStyle={{ backgroundColor: 'transparent' }}
                            title='Thick'
                            checkedIcon='dot-circle-o'
                            checked={!crustChecked}
                            onPress={thickCrustChecked}
                            uncheckedIcon='circle-o'
                        />
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, }}>
                    <Text style={styles.subTitle}>Quantity:</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, }}>
                        <TouchableOpacity onPress={() => setQuantity(i--)}>
                            <AntDesign name='minuscircleo' color={color.black} size={dimension.iconSize} />
                        </TouchableOpacity>
                        <Text style={styles.subTitle} >{quantity}</Text>
                        <TouchableOpacity onPress={() => setQuantity(i++)}><AntDesign name='pluscircleo' color={color.black} size={dimension.iconSize} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Button onPress={() => {
                myStore.dispatch({
                    type: 'addtocart',
                    name: 'Pizza',
                    size: 'M',
                    crust: 'Thick',
                    quantity: 14,
                });
                console.log(myStore.getState().cartReducer);
            }} title={string.buttonAddToCart} buttonStyle={styles.addCart} />
        </View>
    )

}
