import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-elements';

import CategoriesStyles from './Categories.style';
import strings from '../../resources/strings/strings';

import CategoryItem from '../../../components/CategoryItem/CategoryItem.component';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';

import CategoriesUseCase from '../../../UseCase/CategoriesUseCase';

import {connect} from 'react-redux';
import CartUseCase from '../../../UseCase/CartUseCase';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: '', badgeNum: 0};
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: null,
      headerTransparent: true,
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      headerLeft: navigation => (
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <HeaderIcon iconName={strings.categoriesScreen.iconBarsName} />
        </TouchableOpacity>
      ),
      headerRight: navigation => (
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('cart')}>
            <HeaderIcon iconName={strings.categoriesScreen.iconCartName} />
          </TouchableOpacity>
          {this.state.badgeNum > 0 ? (
            <Badge
              status="warning"
              value={this.state.badgeNum}
              containerStyle={{position: 'absolute', top: 5, right: 8}}
            />
          ) : null}
        </View>
      ),
    });
  }

  async componentDidUpdate() {
    let localCart = await new CartUseCase().getCurrentLocalCart();
    this.setState({badgeNum: localCart.length});
  }

  async componentDidMount() {
    this.setHeaderBar();
    let getData = await new CategoriesUseCase().getCategoriesList();
    this.setState({data: getData.data.categories});
    let localCart = await new CartUseCase().getCurrentLocalCart();
    this.setState({badgeNum: localCart.length});
  }

  renderCategoryItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('productMenu', {
          catId: item.catId,
          categoryName: item.categoryName,
        });
      }}>
      <CategoryItem title={item.categoryName} imageSource={item.imgUrl} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={CategoriesStyles.container}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderCategoryItem}
            keyExtractor={item => item.catId}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps)(Menu);
