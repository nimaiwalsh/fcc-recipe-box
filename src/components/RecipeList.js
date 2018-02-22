import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { styles } from './RecipeList_style';
import { Button, UL } from './StyledComponents';

class RecipeList extends Component {
  renderItem() {
    const { foodList } = this.props;
    return _.map(foodList, (item, key) => {
      return (
        <li key={key}>
          <Link to={`/${key}`}>{item.name}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={ styles }>
        <UL>{this.renderItem()}</UL>
        <Link to={'/add-recipe'}><Button primary onClick={this.addRecipe}>Add Recipe</Button></Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foodList: state.recipes
  };
}

export default connect(mapStateToProps, null)(RecipeList);
