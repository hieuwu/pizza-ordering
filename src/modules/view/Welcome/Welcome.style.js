import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Welcome.colors';

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
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    height: 50,
    lineHeight: 50,
    margin: 2,
  },
});
