import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';
import dimensions from '../../resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ovalColor,
    height: dimensions.login.containerHeight,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  subView: {
    marginTop: 60,
    flexDirection: 'column',
    backgroundColor: colors.pizzaMenuListBackground,
    height: dimensions.login.subViewHeight,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderRadius: 40,
    alignItems: 'center',
    margin: 8,
  },
  headerTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 140,
  },
  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtInputContainer: {
    margin: 8,
    flexDirection: 'column',
    height: dimensions.login.txtInputHeight,
    width: dimensions.login.txtInputWidth,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '90%',
  },
  btn: {
    height: dimensions.login.btnHeight,
    width: dimensions.login.btnWidth,
    backgroundColor: colors.mainRed,
    borderRadius: 80,
    borderWidth: 2,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endTxt: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    margin: 8,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 17,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: '90%',
    height: dimensions.screenSize.height / 4,
    borderRadius: 40,
  },
  btnOkContainer: {
    flexDirection: 'column',
    width: 100,
    height: 30,
    marginTop: 16,
    backgroundColor: colors.mainRed,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  txtOk: {
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
  },
  signUpStatusTxt: {
    fontSize: 20,
    color: colors.black,
  },
});
