import {StyleSheet} from 'react-native';
import colors from '../../resources/colors/Colors';
import dimensions from '../../resources/dimensions/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pizzaMenuListBackground,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    backgroundColor: colors.mainRed,
  },
  billInfoView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8,
  },
  billLineContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 20,
    color: colors.white,
    alignSelf: 'center',
  },
  mainView: {
    flex: 1,
    borderRadius: 16,
  },

  cartListView: {
    width: dimensions.screenSize.width - 20,
    borderRadius: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  iconContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cartLineContainer: {
    backgroundColor: colors.pizzaMenuListBackground,
    flexDirection: 'row',
    height: 130,
    width: '95%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 8,
  },
  confirmBtn: {
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
  goBackBtn: {
    flexDirection: 'row',
    width: '95%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  confirmBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  goBackBtnText: {
    fontSize: 20,
    color: colors.black,
  },
  txtEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtEmptyItem: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
