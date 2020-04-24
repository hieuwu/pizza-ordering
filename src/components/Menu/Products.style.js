import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'column',
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    height: 200,
    width: '100%',
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
