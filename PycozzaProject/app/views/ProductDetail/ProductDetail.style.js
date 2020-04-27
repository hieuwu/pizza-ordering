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
    }
})

export default styles;