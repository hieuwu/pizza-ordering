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
  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtInputContainer: {
    margin: 16,
    flexDirection: 'row',
    height: dimensions.login.txtInputHeight,
    width: dimensions.login.txtInputWidth,
  },
  btnLogin: {
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
  signUpText: {
    marginTop: 16,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  errorTxt: {
    color: colors.mainRed,
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
  loginStatusTxt: {
    fontSize: 20,
    color: colors.black,
  },
  signOutBtnView: {
    width: '90%',
    height: '10%',
    backgroundColor: colors.mainRed,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signOutTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
});
