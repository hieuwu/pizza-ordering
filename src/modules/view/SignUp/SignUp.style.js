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
  nameInput: {
    height: 40,
    width: 270,
    borderBottomWidth: 1,
    marginTop: 16,
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
  endBtn: {},
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 17,
  },
});
