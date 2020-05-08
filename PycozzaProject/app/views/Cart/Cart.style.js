import { StyleSheet } from 'react-native'
import dimension from '../../resources/dimensions';
import color from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    table: {
        width: dimension.window.width - 30,
        height: dimension.window.height - 150,
        backgroundColor: color.white,
        borderRadius: 15,
    },
    tableHeader: {
        width: dimension.window.width - 30,
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
        elevation: 5,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: color.white
    },
    okButton: {
        backgroundColor: color.mainColor,
        borderRadius: 15,
        width: 150,
        marginHorizontal: 25,
    },
    cancelButton: {
        backgroundColor: color.inactiveStatus,
        borderRadius: 15,
        width: 150,
        marginHorizontal: 25,
    },
    textInput: {
        borderBottomColor: color.inactiveStatus,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 15,
        marginHorizontal: 25,
        marginVertical: 10,
    },
    textButton : {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        color: color.mainColor
    },
    touchButton: {
        backgroundColor: color.white, 
        marginVertical: 25,
        borderRadius: 10, 
        padding: 8
    }

});

export default styles;