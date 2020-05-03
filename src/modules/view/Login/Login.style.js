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
    backgroundColor: colors.white,
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
  nameInput: {
    flexDirection: 'row',
    height: dimensions.login.txtInputHeight,
    width: dimensions.login.txtInputWidth,
    borderBottomWidth: 1,
    marginTop: 30,
    justifyContent: 'space-between',
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
});
