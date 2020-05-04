import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

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
    width: '95%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'column',
    width: '90%',
    height: '30%',
    alignItems: 'center',
  },
  sizeItemContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
