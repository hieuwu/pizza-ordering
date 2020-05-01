import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mainViewContainer: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'column',
  },
  touchContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
    // margin: 8,
  },
  checkOutBtn: {
    flexDirection: 'row',
    width: '95%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainRed,
    marginBottom: 4,
    borderRadius: 20,
  },
  checkOutBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
});
