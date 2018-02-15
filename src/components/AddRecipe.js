import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';

import { Heading2, Heading3, Button, Button2, Form } from './StyledComponents';
import { addRecipe } from '../actions/index';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      recipeName: '',
      ingredientList: [],
      warning: '',
      submissionError: ''
    };
  }

  renderIngredients() {
    return this.state.ingredientList.map((item, key) => (
      <li key={key}>{item}</li>
    ));
  }

  handleNameInput = e => {
    this.setState({ recipeName: e.target.value });
  };

  handleIngredientInput = e => {
    this.setState({ item: e.target.value });
  };

  addIngredient = () => {
    let { ingredientList, item, warning } = this.state;
    if (!item) {
      warning = 'Add an ingredient';
    } else {
      ingredientList.push(item);
      warning = '';
      item = '';
    }
    this.setState({ ingredientList, item, warning });
  };

  addRecipe = () => {
    const { recipeName, ingredientList } = this.state;
    //Ensure the recipe has a name and one ingredient before submitting
    if (!recipeName && ingredientList.length < 1) {
      return this.setState({ submissionError: 'Please enter a recipe name and ingredients' });
    } else if (ingredientList.length < 1) {
      return this.setState({ submissionError: 'Enter atleast 1 ingredient' });
    } else if (!recipeName) {
      return this.setState({ submissionError: 'Please give your recipe a name' });
    }
    //Call action creator addRecipe() to store recipe in global state return user to menu list
    this.props.addRecipe(recipeName, ingredientList, () => {
      this.props.history.push('/')
    });
  };

  render() {
    console.log(this.state.submissionError)
    return (
      <div>
        <Heading2>Add recipe</Heading2>
        <Link to={'/'}>
          <Button>Back to recipes</Button>
        </Link>
        <div>
          <Heading3>Recipe name</Heading3>
          <input
            name="recipe-name"
            onChange={this.handleNameInput}
            value={this.state.recipeName}
          />
          <Heading3>Ingredients</Heading3>
          <ul>{this.renderIngredients()}</ul>
          <input
            name="ingredient"
            onChange={this.handleIngredientInput}
            value={this.state.item}
          />
          <div className='ingredient-error'>{this.state.warning}</div>
          <Button onClick={this.addIngredient}>Add ingredient</Button>
          <Button2 onClick={this.addRecipe}>Add recipe</Button2>
          <div className='submission-error'>{this.state.submissionError}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addRecipe })(AddRecipe);
