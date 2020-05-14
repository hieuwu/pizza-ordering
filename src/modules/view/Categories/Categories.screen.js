import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import CategoriesStyles from './Categories.style';
import strings from '../../resources/strings/strings';

import CategoryItem from '../../../components/CategoryItem/CategoryItem.component';

import CategoriesUseCase from '../../../UseCase/CategoriesUseCase';

import {connect} from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  async componentDidMount() {
    let getData = await new CategoriesUseCase().getCategoriesList();
    this.setState({data: getData.data.categories});
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

  arrayReverseObj = obj => {
    let newArray = [];

    Object.keys(obj)
      .sort()
      .reverse()
      .forEach(key => {
        newArray.push({
          imgUrl: obj[key].imgUrl,
          categoryName: obj[key].categoryName,
          catId: obj[key].catId,
        });
      });

    return newArray;
  };

  render() {
    return (
      <View style={CategoriesStyles.container}>
        <View>
          <FlatList
            data={this.arrayReverseObj(this.state.data)}
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
