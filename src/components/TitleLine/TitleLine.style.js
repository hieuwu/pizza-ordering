import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';
import strings from '../../modules/resources/strings/strings';
import dimensions from '../../modules/resources/dimensions/Dimensions';

export default StyleSheet.create({
  titleLineContainer: {
    width: '90%',
    height: 32,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  circleView: {
    width: 32,
    height: 32,
    backgroundColor: colors.mainRed,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  numberTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.ovalColor,
  },
});
