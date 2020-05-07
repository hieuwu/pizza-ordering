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
    height: '19.8%',
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
  userInfoView: {
    marginTop: 8,
    width: dimensions.screenSize.width - 20,
    borderRadius: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
    justifyContent: 'center',
    alignContent: 'center',
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
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 130,
    width: '95%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
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
  itemContainer: {
    flexDirection: 'column',
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  txtTitle: {
    color: colors.grey,
    fontSize: 15,
  },
  txtContent: {
    color: colors.ovalColor,
    fontSize: 16,
    marginBottom: 8,
  },
});