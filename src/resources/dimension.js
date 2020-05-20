import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const dimensionStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  HomeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  HomeImg: {
    width: w,
    height: h,
    position: 'absolute',
  },

  HomeNameContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  StartOrderButton: {
    marginTop: 10,
    width: 0.45 * w,
    height: 38,
    backgroundColor: '#e5293e',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ArrowRightIconHome: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    position: 'absolute',
  },

  CategoryContainer: {
    width: w,
    height: 0.35 * h,
    justifyContent: 'flex-end',
  },

  CategoryImg: {
    width: w,
    height: 0.35 * h,
    position: 'absolute',
  },

  BarsIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 0.08 * h,
    marginLeft: 16,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },

  CartIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 0.08 * h,
    right: 16,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },

  NavigationPanel: {
    position: 'absolute',
    //width: 0.72 * w,
    height: 0.95 * h,
    backgroundColor: '#e4283d',
    elevation: 10,
  },

  XIconNavigationPanel: {
    marginLeft: 0.6 * w,
    marginTop: 0.07 * h,
  },

  LineNavigationPanel: {
    width: 0.53 * w,
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    alignItems: 'center',
    paddingLeft: 20,
  },

  DropDownMenuIcon: {
    position: 'absolute',
    marginLeft: 0.6 * w,
  },

  MenuLineNavigationPanel: {
    height: 50,
    justifyContent: 'center',
  },

  LineCategoryMenu: {
    width: 0.53 * w,
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 50,
  },

  curtainBackground: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: -(900 - w / 2),
    alignSelf: 'center',
    borderRadius: 1000,
    backgroundColor: '#0b2031',
  },

  CarouselContainer: {
    height: 0.61 * h,
    width: w,
  },

  imageCarousel: {
    width: 0.8 * w,
    height: 0.6 * w,
  },

  itemCarouselContainer: {
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  headerCategoryName: {
    height: 0.17 * h,
    alignItems: 'center',
    paddingTop: 0.08 * h,
  },

  favoriteProductInfoContainer: {
    width: 0.8 * w,
    height: 0.17 * h,
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: '#0b2031',
  },

  orderNowButtonCarousel: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: 0.25 * w,
    height: 0.17 * h,
    borderWidth: 5,
    borderColor: '#0b2031',
    borderBottomRightRadius: 20,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteProductInfo: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    width: 0.44 * w,
  },

  separateLine: {
    marginTop: 10,
    marginBottom: 10,
    width: 0.9 * w,
    height: 2.3,
    backgroundColor: '#e4e4e4',
    alignSelf: 'center',
  },

  ItemProductListContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    width: 0.9 * w,
    height: 0.14 * h,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  ProductListImg: {
    width: 0.21 * w,
    height: 0.11 * h,
  },

  ProductListInfo: {
    flex: 2,
    height: 0.11 * h,
    justifyContent: 'center',
  },

  orderNowButtonProductList: {
    flex: 1,
    height: 0.14 * h,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ProductListPrice: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
  },

  ImageProductDetail: {
    width: w,
    height: 0.38 * h,
  },

  goBackIconDetailScreen: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginTop: 0.39 * h,
    marginLeft: 10,
  },

  ProductDetailRate: {
    marginTop: 10,
    marginBottom: 10,
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ProductDetailPrice: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  OrderPanel: {
    alignSelf: 'center',
    marginTop: 0.025 * h,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: 0.9 * w,
    height: 0.95 * h,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e5293e',
    elevation: 10,
  },

  XIconOrderPanel: {
    marginLeft: 0.8 * w,
    marginTop: 10,
  },

  ImageOrderPanel: {
    width: 0.8 * w,
    height: 0.4 * h,
    marginTop: 10,
    alignSelf: 'center',
  },

  SizePicker: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    width: 0.4 * w,
    height: 0.11 * h,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SizePickerUnpick: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    width: 0.4 * w,
    height: 0.11 * h,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#aeaeae',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkIcon: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#e5293e',
    left: 0.4 * w - 22,
    bottom: 0.11 * h - 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  SizeModifyContainer: {
    alignSelf: 'center',
    height: 0.15 * h,
  },

  quantityPicker: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#e5293e',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 0.8 * w,
    height: 50,
  },

  PriceContainer: {
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addToCartButton: {
    marginTop: 10,
    marginBottom: 10,
    width: 0.8 * w,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5293e',
    borderRadius: 27,
  },

  goBackIconSignUpScreen: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  cartBox: {
    width: 0.9 * w,
    height: 0.8 * h,
    elevation: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  checkOutButton: {
    width: 0.9 * w,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5293e',
    borderRadius: 27,
    marginTop: 20,
    marginBottom: 20,
  },

  cartBoxHeader: {
    width: 0.9 * w,
    height: 0.09 * h,
    backgroundColor: '#e5293e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  ItemCartListContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    width: 0.85 * w,
    height: 0.14 * h,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  LogInButton: {
    marginTop: 3,
    width: 0.7 * w,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b2031',
    borderRadius: 5,
  },

  ItemCartListInfo: {
    flex: 3,
    height: 0.14 * h,
    paddingLeft: 10,
    justifyContent: 'center',
  },

  XIconCartScreen: {
    position: 'absolute',
    top: 5,
    right: 5,
  },

  ItemCartListImage: {
    width: 0.2 * w,
    height: 0.11 * h,
  },

  cartBoxFooter: {
    padding: 10,
    width: 0.9 * w,
    height: 0.09 * h,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },

  dashLine: {
    width: 0.9 * w,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#0b2031',
    borderStyle: 'dashed',
  },

  dashLineCheckOut: {
    width: 0.9 * w,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
  },

  CheckOutHeaderContainer: {
    width: w,
    height: 0.28 * h,
    backgroundColor: '#e5293e',
    alignItems: 'center',
  },

  CheckOutHeaderInfo: {
    width: 0.9 * w,
    height: 0.1 * h,
    justifyContent: 'center',
  },

  CheckOutHeaderDatePrice: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  orderInfoContainer: {
    marginTop: 10,
    width: 0.9 * w,
    alignSelf: 'center',
  },

  paymentMethodPicker: {
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
    width: 0.3 * w,
    height: 0.18 * h,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paymentMethodPickerUnpick: {
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
    width: 0.3 * w,
    height: 0.18 * h,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#aeaeae',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ImagePaymentMethod: {
    width: 0.22 * w,
    height: 0.12 * h,
    marginTop: 5,
    marginBottom: 5,
  },

  checkIconPaymentMethod: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#e5293e',
    left: 0.3 * w - 22,
    bottom: 0.18 * h - 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  continueButtonCheckOut: {
    width: 0.9 * w,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5293e',
    borderRadius: 27,
    marginTop: 20,
    marginBottom: 5,
  },

  backButtonCheckOut: {
    width: 0.9 * w,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 27,
    marginTop: 5,
    marginBottom: 20,
  },

  BackHomeButton: {
    marginTop: 10,
    width: 0.45 * w,
    height: 38,
    backgroundColor: '#0b2031',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 100,
    height: 100,
  },

  CartIconNumber: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#ffc107',
    right: -2,
    top: -2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  paginationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },

  paginationDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 0,
    marginHorizontal: 8,
    backgroundColor: '#0b2031'
  },

  addToCartGifContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },

  addToCartGif: {
    width: 100,
    height: 100,
    backgroundColor: '#e5293e',
    tintColor: '#FFFFFF',
  }
});

export {dimensionStyles};
