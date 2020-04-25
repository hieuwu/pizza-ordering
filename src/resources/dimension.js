import {StyleSheet, Dimensions} from 'react-native';

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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  },

  HomeNameContainer: {
    height: 180,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  StartOrderButton: {
    marginTop: 10,
    width: 187,
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
    width: Dimensions.get('window').width,
    height: 272,
    justifyContent: 'flex-end',
  },

  CategoryImg: {
    width: Dimensions.get('window').width,
    height: 272,
    position: 'absolute',
  },

  BarsIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 65,
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
    marginTop: 65,
    right: 16,
    backgroundColor: '#e5293e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavigationPanel: {
    position: 'absolute',
    width: 296,
    height: 750,
    backgroundColor: '#e4283d',
  },

  XIconNavigationPanel: {
    marginLeft: 250,
    marginTop: 55,
  },

  LineNavigationPanel: {
    width: 220,
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    alignItems: 'center',
    paddingLeft: 20,
  },

  DropDownMenuIcon: {
    position: 'absolute',
    marginLeft: 250,
  },

  MenuLineNavigationPanel: {
    height: 50,
    justifyContent: 'center',
  },

  LineCategoryMenu: {
    width: 220,
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
    top: -(900 - Dimensions.get('window').width/2),
    alignSelf: 'center',
    borderRadius: 1000,
    backgroundColor: '#0b2031',
  },

  CarouselContainer:{
    height: 385,
    width: Dimensions.get('window').width,
  },

  imageBackgroundCarousel:{
    width: 0.8*Dimensions.get('window').width,
    height: 0.6*Dimensions.get('window').width,
  },

  itemCarouselContainer:{
    backgroundColor:'#FFFFFF',
    borderRadius: 20,
    elevation:20,
    alignItems: 'center',
  },

  headerCategoryName:{
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  FavoriteProductInfo:{
    width: 0.7*Dimensions.get('window').width,
    height:93,
    elevation:10,
    backgroundColor: 'red',
    marginBottom: 20,
  },
});

export {dimensionStyles};
