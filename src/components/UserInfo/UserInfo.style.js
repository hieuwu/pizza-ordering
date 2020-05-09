import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';
import strings from '../../modules/resources/strings/strings';
import dimensions from '../../modules/resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: colors.pizzaItemBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  userInfoView: {
    marginTop: 8,
    width: dimensions.screenSize.width - 20,
    borderRadius: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameContainer: {
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
  },
  userInfoDesContainer: {
    flexDirection: 'column',
    marginLeft: 16,
    marginRight: 16,
  },
  itemContainer: {
    flexDirection: 'column',
    marginTop: 8,
  },
  txtTitle: {
    color: colors.grey,
    fontSize: 15,
  },
  txtContent: {
    color: colors.ovalColor,
    fontSize: 16,
  },
});
