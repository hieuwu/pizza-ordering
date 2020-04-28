import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';
import dimensions from '../../resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  scrollViewContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: dimensions.screenSize.height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  pizzaTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  pizzaDescription: {
    margin: 8,
    fontSize: 15,
    textAlign: 'center',
  },
  optionTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 4,
    textAlign: 'center',
  },
  sizeOptionContainer: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verticalOptionContainer: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cheeseContainer: {
    width: '95%',
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addCartBtn: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainRed,
    // margin: 8,
    marginBottom: 4,
    borderRadius: 20,
  },
  addCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
});
