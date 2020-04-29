import { StyleSheet } from 'react-native'
import dimension from '../../resources/dimensions';
import color from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    table: {
        width: dimension.window.width - 50,
        height: dimension.window.height - 150,
        backgroundColor: color.white,
        borderRadius: 15,
    },
    tableHeader: {
        width: dimension.window.width - 50,
        height: 50,
        backgroundColor: color.mainColor,
        borderRadius: 15,
        justifyContent: 'center'
    },
    headerTitle: {
        color: color.white,
        fontSize: dimension.itemTitleSize,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonCheckOut: {
        backgroundColor: color.mainColor,
        borderRadius: 15,
        width: dimension.window.width - 50,
        marginVertical: 15,
        justifyContent: 'flex-end'
    },
    listWraper: {
        height: dimension.window.height - 270
    },
    price: {
        fontWeight: 'bold',
        color: color.green,
        fontSize: 24,
    },
    emptyCart: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    emptyPrompt: {
        color: color.shadow,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    },
    dottedLine: {
        marginVertical: 15,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    promptText: {
        color: color.shadow,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    }

});

export default styles;