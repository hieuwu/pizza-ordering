import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.mainRed,
    borderRadius: 30,
    margin: 8,
    alignItems: 'center',
  },
});
