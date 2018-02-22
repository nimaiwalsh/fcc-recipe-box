import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { Button, Button2 } from './StyledComponents';
import { addRecipe, updateRecipe } from '../actions/index';

class AddEditRecipe extends Component {
  constructor(props) {
    super(props);
    const { recipe } = this.props;
    this.state = {
      item: '',
      recipeName: recipe ? recipe.name : '',
      ingredientList: recipe ? [...recipe.ingredients] : [],
      warning: '',
      submissionError: null
    };
  }

  renderIngredients = () => {
    return this.state.ingredientList.map((item, key) => {
      return (
        <li key={key} className="ingredient">
          {item}{' '}
          <div className="delete" onClick={() => this.deleteIngredient(key)}>
            x
          </div>
        </li>
      );
    });
  };

  handleNameInput = e => {
    this.setState({ recipeName: e.target.value });
  };

  handleIngredientInput = e => {
    this.setState({ item: e.target.value });
  };

  addIngredient = () => {
    let { ingredientList, item, warning, submissionError } = this.state;
    if (!item) {
      warning = 'Add an ingredient';
    } else {
      ingredientList.push(item);
      warning = '';
      item = '';
      submissionError = '';
    }
    this.setState({ ingredientList, item, warning, submissionError });
  };

  deleteIngredient = key => {
    const { ingredientList } = this.state;
    ingredientList.splice(key, 1);
    this.setState({ ingredientList });
  };

  submissionValidation = () => {
    const { recipeName, ingredientList } = this.state;
    let error = null;
    //Ensure the recipe has a name and one ingredient before submitting
    if (!recipeName && ingredientList.length < 1) {
      error = 'Please enter a recipe name and ingredients';
    } else if (ingredientList.length < 1) {
      error = 'Enter atleast 1 ingredient';
    } else if (!recipeName) {
      error = 'Please give your recipe a name';
    }
    return error;
  };

  addUpdateRecipe = (addOrUpdate) => {
    const { recipeName, ingredientList } = this.state;
    const existingRecipeKey = this.props.match.params.id;
    const error = this.submissionValidation();
    if (error) {
      return this.setState({ submissionError: error });
    }
    //Call Action Creators to Add/Update menu in Gobal store/state
    if (addOrUpdate === 'add') {
      this.props.addRecipe(recipeName, ingredientList, () => {
        this.props.history.push('/');
      });
    }
    if (addOrUpdate === 'update') {
      this.props.updateRecipe(existingRecipeKey, recipeName, ingredientList, () => {
        this.props.history.push(`/${existingRecipeKey}`)
      });
    }
  };

  render() {
    //Set parameters to either edit/add recipe
    const { recipe } = this.props;
    const addOrUpdate = recipe ? 'update' : 'add';
    return (
      <div className={styles}>
        <Link to={'/'}>
          <Button secondary>Back to recipes</Button>
        </Link>
        <h2>{addOrUpdate} recipe</h2>
        <div>
          <h3>Recipe name</h3>
          <input
            name="recipe-name"
            onChange={this.handleNameInput}
            value={this.state.recipeName}
          />
          <h3>Ingredients</h3>
          <ul>
            <CSSTransitionGroup
              className={transitionStyles}
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {this.renderIngredients()}
            </CSSTransitionGroup>
          </ul>
          <input
            name="ingredient"
            onChange={this.handleIngredientInput}
            value={this.state.item}
          />
          <div className="ingredient-error">{this.state.warning}</div>
          <Button onClick={this.addIngredient}>Add ingredient</Button>
          <Button primary onClick={() => this.addUpdateRecipe(addOrUpdate)}>{addOrUpdate} recipe</Button>
          <div className="submission-error">{this.state.submissionError}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addRecipe, updateRecipe })(AddEditRecipe);

const styles = css({
  '& .ingredient .delete': {
    display: 'inline',
    backgroundColor: 'red'
  }
});

const transitionStyles = css({
  '& .fade-enter': {
    opacity: '0'
  },
  '& .fade-enter.fade-enter-active': {
    opacity: '1',
    transition: 'opacity 500ms ease-in'
  },
  '& .fade-leave': {
    opacity: '1'
  },
  '& .fade-leave.fade-leave-active': {
    opacity: '0',
    transition: 'opacity 300ms ease-in'
  }
});
