import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '40%',
    height: 90,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  descriptionContainer: {
    marginLeft: 16,
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
    color: colors.green,
    fontSize: 15,
  },
  iconContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
