import { StyleSheet } from 'react-native'
import color from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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
        marginHorizontal: 10,
        marginTop: 25,
    },
    buttonLogin: {
        backgroundColor: color.mainColor,
        marginHorizontal: 15,
        borderRadius: 15,
        marginVertical: 15
    },
    buttonSignUp: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        borderRadius: 15,
        marginBottom: 30,
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