import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import dimension from '../../resources/dimensions';
import color from '../../resources/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
 class ListItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.gotoDetail}>
                <View style={styles.itemWrapper}>
                   <Image style={styles.itemImage} source={{ uri: this.props.item.imageURL }} />
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.itemTitle}>{this.props.item.name}</Text>
                        <Text>{this.props.item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const itemStyles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: color.white,
        borderRadius: 15,
        padding: 8,
        shadowColor: color.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        width: dimension.window.width,
        
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: dimension.itemTitleSize,
        marginHorizontal: 10,
    },
    itemImage: {
        width: dimension.imageItem.height,
        height: dimension.imageItem.height,
        alignSelf: 'center',
        marginLeft: 15,
    },
    price: {
        textAlign: 'right',
        color: color.mainColor,
        fontSize: dimension.itemTitleSize,
        fontWeight: 'bold',
    }

})

export default itemStyles;