import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 130,
    width: '95%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: '40%',
    height: 90,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
  },
  descriptionContainer: {
    width: '40%',
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  descriptionItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
