import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: colors.ovalColor,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.ovalColor,
  },
  textContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    marginBottom: 10,
    fontSize: 40,
    color: '#FFFFFF',
  },
});
