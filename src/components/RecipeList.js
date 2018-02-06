import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
  renderItem() {
    const { foodList } = this.props;
    return _.map(foodList, (item, key) => {
      return (
        <li key={key}>
          <Link to={`/${key}`}>{item.name} {key}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderItem()}</ul>
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
