import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.pizzaMenuListBackground,
  },
  flatListContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
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
    height: 250,
    margin: 8,
  },
});
