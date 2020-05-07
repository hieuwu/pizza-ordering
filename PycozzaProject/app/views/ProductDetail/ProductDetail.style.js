import { StyleSheet } from 'react-native'
import dimension from '../../resources/dimensions';
import color from '../../resources/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    priceTitle: {
        color: color.mainColor,
        fontSize: dimension.itemTitleSize,
        fontWeight: 'bold'
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    addCart: {
        backgroundColor: color.mainColor,
        marginHorizontal: 15, 
        borderRadius: 15,
        marginVertical: 15,
    },
    content: {
        fontSize: 18
    },
    modalView: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.headerBackground,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: color.white
    },
    okButton: {
        backgroundColor: color.mainColor,
        borderRadius: 15,
        width: 80,
    }
})

export default styles;