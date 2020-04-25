import {StyleSheet, Dimensions} from 'react-native';

const w=Dimensions.get('window').width
const h= Dimensions.get('window').height

const dimensionStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  splashScreenContainer: {
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
    width: 0.45*w,
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
    height: 0.35*h,
    justifyContent: 'flex-end',
  },

  CategoryImg: {
    width: w,
    height: 0.35*h,
    position: 'absolute',
  },

  BarsIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 0.08*h,
    marginLeft: 16,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  CartIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 0.08*h,
    right: 16,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavigationPanel: {
    position: 'absolute',
    width: 0.72*w,
    height: 0.95*h,
    backgroundColor: '#e4283d',
  },

  XIconNavigationPanel: {
    marginLeft: 0.6*w,
    marginTop: 0.07*h,
  },

  LineNavigationPanel: {
    width: 0.53*w,
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    alignItems: 'center',
    paddingLeft: 20,
  },

  DropDownMenuIcon: {
    position: 'absolute',
    marginLeft: 0.6*w,
  },

  MenuLineNavigationPanel: {
    height: 50,
    justifyContent: 'center',
  },

  LineCategoryMenu: {
    width: 0.53*w,
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 50,
  },

  CarouselBackground:{
    position: 'absolute',
    width:1000,
    height:1000,
    top: -(900 - w/2),
    alignSelf: 'center',
    borderRadius: 1000,
    backgroundColor: '#0b2031',
  },

  CarouselContainer:{
    height: 0.5*h,
    width: w,
  },

  imageCarousel:{
    width: 0.8*w,
    height: 0.6*w,
  },

  itemCarouselContainer:{
    overflow: "hidden",
    backgroundColor:'#FFFFFF',
    borderRadius: 20,
    elevation:10,
    alignItems: 'center',
  },

  headerCategoryName:{
    height: 0.17*h,
    alignItems: 'center',
    paddingTop: 0.08*h,
  },

  favoriteProductInfoContainer:{
    width: 0.8*w,
    height: 0.16*h,
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor:'#0b2031',
  },

  orderNowButtonCarousel:{
    position: 'absolute',
    alignSelf: 'flex-end',
    width: 0.25*w,
    height: 0.16*h,
    borderWidth: 5,
    borderColor: '#0b2031',
    borderBottomRightRadius:20,
    backgroundColor:'#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteProductInfo:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    width: 0.44*w,
  },

  separateLine: {
    marginTop: 10,
    marginBottom: 10,
    width: 0.9*w,
    height: 2.3,
    backgroundColor: '#e4e4e4',
    alignSelf: 'center',
  },

  ItemProductListContainer:{
    flex:1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    width: 0.9*w,
    height: 0.14*h,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: "hidden",
  },

  ProductListImg:{
    width: 0.21*w,
    height: 0.11*h,
  },

  ProductListInfo:{
    flex:2,
    height: 0.11*h,
    justifyContent: 'center',
  },

  orderNowButtonProductList:{
    flex:1,
    height:0.14*h,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ProductListPrice:{
    marginLeft:10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
  },

  ImageProductDetail:{
    width: w,
    height: 0.38*h,
  },

  goBackIconDetailScreen:{
    position: 'absolute',
    marginTop: 0.39*h,
    marginLeft: 10,
  },

  ProductDetailRate:{
    marginTop: 10,
    marginBottom: 10,
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ProductDetailPrice:{
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  orderButtonDetailScreen:{
    width: 0.9*w,
    height: 54,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4283d',
    borderRadius: 27,
  },
});

export {dimensionStyles};
