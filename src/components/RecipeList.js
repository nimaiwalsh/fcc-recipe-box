import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import icons from '../assets/icons/index';

import { styles } from './RecipeList_style';
import { Button } from './StyledComponents';

class RecipeList extends Component {
  renderItem() {
    const { foodList } = this.props;
    return _.map(foodList, (item, key) => {
      return (
        <Link key={key} to={`/${key}`}>
          <li key={key}>
            {item.name}
            <img class='svg' src={icons.arrow} />
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={styles}>
        <ul>{this.renderItem()}</ul>
        <Link to={'/add-recipe'}>
          <Button primary onClick={this.addRecipe}>
            Add Recipe
          </Button>
        </Link>
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
