import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import dimension from '../../resources/dimensions';
import color from '../../resources/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ListItem extends Component {
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
const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'column',
        marginVertical: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
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
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: dimension.window.width / 2.5,
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: dimension.itemTitleSize,
        marginHorizontal: 10,
    },
    itemImage: {
        width: dimension.imageItem.height,
        height: dimension.imageItem.height,
        resizeMode: 'center',
        borderRadius: 200,
    }

})