import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'column',
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderWidth: 1,
    borderColor: colors.ovalColor,
    height: 200,
    width: '100%',
    resizeMode: 'cover',
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
