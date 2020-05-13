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
        backgroundColor: color.grayBackground,
        justifyContent: 'center',
        paddingBottom: 10,
        alignItems: 'center',
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        marginTop: 50,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: dimension.window.width,
        height: dimension.window.height - 150,
    },
    modalViewSuccess: {
        backgroundColor: color.grayBackground,
        justifyContent: 'center',
        padding: 25,
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    modalViewMember: {
        backgroundColor: color.grayBackground,
        justifyContent: 'center',
        padding: 8,
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 25,
        width: dimension.window.width - 10,
        height: dimension.window.height - 380,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: color.shadow
    },
    okButton: {
        backgroundColor: color.mainColor,
        borderRadius: 15,
        width: 130,
        marginHorizontal: 25,
    },
    cancelButton: {
        backgroundColor: color.inactiveStatus,
        borderRadius: 15,
        width: 130,
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
        marginVertical: 15,
    },
    textButton : {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        backgroundColor: color.white,
        padding: 8,
        borderRadius: 15,
        elevation: 5,
    },
    touchButton: {
        marginVertical: 10,
        borderRadius: 10, 
        padding: 8
    }

});

export default styles;