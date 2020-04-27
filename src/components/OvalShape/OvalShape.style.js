import {StyleSheet} from 'react-native';
import colors from '../../modules/resources/colors/Colors';
import dimensions from '../../modules/resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    width: dimensions.screenSize.width + 200,
    height: dimensions.screenSize.height + 50,
    backgroundColor: colors.ovalColor,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 300,
    top: -dimensions.screenSize.height / 2 - 200,
  },
});
