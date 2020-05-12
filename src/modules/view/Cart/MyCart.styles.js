import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mainViewContainer: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'column',
  },
  touchContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  checkOutBtn: {
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
  checkOutBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  iconContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cartLineContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 130,
    width: '95%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  totalPriceContainer: {
    width: '100%',
    backgroundColor: colors.ovalColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: colors.text,
    fontSize: 20,
    margin: 8,
  },
});
