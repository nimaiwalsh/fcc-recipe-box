import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { styles, transitionStyles } from './AddEditRecipe_style';
import { Button } from './StyledComponents';
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
        <CSSTransition
          key={item}
          classNames="fade"
          timeout={{enter: 1000, exit: 500}}
        >
          <li className="ingredient">
            {item}
            <div className="delete" onClick={() => this.deleteIngredient(key)}>x</div>
          </li>
        </CSSTransition>
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
    let newIngredientList = this.state.ingredientList.slice();
    newIngredientList.splice(key, 1);
    this.setState({ ingredientList: newIngredientList });
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

  addUpdateRecipe = addOrUpdate => {
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
      this.props.updateRecipe(
        existingRecipeKey,
        recipeName,
        ingredientList,
        () => {
          this.props.history.push(`/${existingRecipeKey}`);
        }
      );
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
            <TransitionGroup className={transitionStyles}>
              {this.renderIngredients()}
            </TransitionGroup>
          </ul>
          <div className='add-ingredient'>
            <input
              name="ingredient"
              onChange={this.handleIngredientInput}
              value={this.state.item}
            />
            <Button secondary onClick={this.addIngredient}>
              Add ingredient
            </Button>
          </div>
          <div className="ingredient-error">{this.state.warning}</div>
          <Button primary onClick={() => this.addUpdateRecipe(addOrUpdate)}>
            {addOrUpdate} recipe
          </Button>
          <div className="submission-error">{this.state.submissionError}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addRecipe, updateRecipe })(AddEditRecipe);
