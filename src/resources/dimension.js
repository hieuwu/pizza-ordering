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
});

export {dimensionStyles};
