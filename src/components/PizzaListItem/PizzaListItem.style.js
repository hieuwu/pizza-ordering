import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: colors.pizzaItemBackground,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  imageContainer: {
    width: '95%',
    height: '50%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  titleContainer: {
    width: '90%',
    height: '10%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'column',
    width: '90%',
    height: '20%',
    alignItems: 'center',
  },
  sizeItemContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '50%',
    justifyContent: 'space-around',
  },
});
