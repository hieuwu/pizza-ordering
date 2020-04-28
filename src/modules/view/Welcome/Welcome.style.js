import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';
import dimensions from '../../resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'column',
    position: 'absolute',
    margin: 32,
  },
  restaurantText: {
    fontSize: 40,
    color: colors.text,
    fontWeight: 'bold',
  },
  pizzaText: {
    fontSize: 25,
    color: colors.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: colors.mainRed,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: colors.text,
    fontWeight: 'bold',
    alignSelf: 'center',
    height: dimensions.startOrderBtn.height,
    lineHeight: dimensions.startOrderBtn.lineHeight,
    margin: 2,
  },
});
