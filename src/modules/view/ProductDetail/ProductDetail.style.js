import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';
import dimensions from '../../resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  scrollViewContainer: {
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    height: dimensions.screenSize.height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pizzaTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  pizzaDescription: {
    marginLeft: 8,
    marginRight: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  optionTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 4,
    textAlign: 'center',
  },
  radioContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 8,
  },
  addCartBtn: {
    flexDirection: 'row',
    width: '95%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainRed,
    marginBottom: 4,
    borderRadius: 20,
  },
  addCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  quantityContainer: {
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityIcon: {
    margin: 8,
  },
  quantityText: {
    fontSize: 30,
  },
  radioHorizontalForm: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioVerticalForm: {
    margin: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 20,
  },
});
