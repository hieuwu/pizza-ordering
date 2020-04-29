import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native'
import dimension from '../../resources/dimensions'
import string from '../../resources/strings'
import color from '../../resources/colors'
import Iionicons from 'react-native-vector-icons/Ionicons'
export default class CartItem extends Component {
    render() {
        return (
            <View style={styles.itemWraper}>
                <Image style={styles.itemImage} source={{ uri: this.props.item.imageURL }} />
                <View style={{ marginLeft: 50, }}>
                    <Text style={styles.title}>{this.props.item.name}</Text>
                    <Text>{this.props.item.size}</Text>
                    <Text style={styles.price}>{this.props.item.price * this.props.item.quantity} {string.currency}</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>x{this.props.item.quantity}</Text>
                <TouchableOpacity onPress={this.props.deleteItem}>
                    <Iionicons name='ios-close-circle' size={dimension.iconSize} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemWraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 8,
    },
    itemImage: {
        width: dimension.imageItem.width,
        height: dimension.imageItem.height,
        resizeMode: 'center',
        borderRadius: 200,
    },
    price: {
        fontWeight: 'bold',
        color: color.green,
    },
    itemDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: dimension.itemTitleSize,
    }
})