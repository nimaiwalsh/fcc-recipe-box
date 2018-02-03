import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class RecipeList extends Component {
  
  renderItem() {
    const { foodList } = this.props;
    return foodList.map((item, key) => (
      <ListItem key={key} name={item.name} ingredients={item.ingredients} />
    ));
  }

  render() {
    return <ul>{this.renderItem()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    foodList: state.recipes
  };
}

export default connect(mapStateToProps, null)(RecipeList);
