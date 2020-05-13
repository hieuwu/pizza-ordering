import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.pizzaMenuListBackground,
  },
  flatListContainer: {
    marginTop: 55,
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: colors.mainRed,
    margin: 10,
    alignItems: 'center',
  },
  touchContainer: {
    width: '45%',
    height: 265,
    margin: 8,
  },
});
