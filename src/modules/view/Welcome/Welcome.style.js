import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Welcome.colors';
import dimensions from '../../resources/dimensions/Welcome.dimensions';

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
    backgroundColor: colors.startOrder,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: colors.text,
    fontWeight: 'bold',
    alignSelf: 'center',
    height: dimensions.buttonText.height,
    lineHeight: dimensions.buttonText.lineHeight,
    margin: 2,
  },
});
