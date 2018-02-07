import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';

import { Heading2, Heading3, Button, Form } from './StyledComponents';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      ingredientList: ['lemon', 'tomato'],
      warning: ''
    };
  }

  renderIngredients() {
    return this.state.ingredientList.map((item, key) => (
      <li key={key}>{item}</li>
    ));
  }

  handleIngredientInput = e => {
    this.setState({ item: e.target.value });
  };

  addIngredient = () => {
    let { ingredientList, item, warning } = this.state;
    if (!item) {
      warning = 'Add an ingredient'
    } else {
      ingredientList.push(item);
      warning = '';
      item = '';
    }
    this.setState({ ingredientList, item, warning });
  };

  render() {
    return (
      <div>
        <Heading2>Add recipe</Heading2>
        <Link to={'/'}>
          <Button>Back to recipes</Button>
        </Link>
        <div>
          <Heading3>Recipe name</Heading3>
          <input />
          <Heading3>Ingredients</Heading3>
          <ul>{this.renderIngredients()}</ul>
          <input
            name="ingredient"
            onChange={this.handleIngredientInput}
            value={this.state.item}
          />
          <div>{this.state.warning}</div>
          <Button onClick={this.addIngredient}>Add ingredient</Button>
        </div>
      </div>
    );
  }
}
