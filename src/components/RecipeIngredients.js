import React, { Component } from 'react';
import { Button } from './StyledComponents';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteRecipe } from '../actions/'; 

class RecipeIngredients extends Component {

  handleDeleteRecipe = () => {
    const recipeNumber = this.props.match.params.id;//React Router properties
    this.props.deleteRecipe(recipeNumber, () => {
      this.props.history.push('/');
    })
  }

  renderIngredients = () => {
    const { ingredients } = this.props.recipe;
    return ingredients.map((item, key) => <li key={key}>{item}</li>); 
  }

  render() {
    const { name } = this.props.recipe;
    const { id } = this.props.match.params;

    return (
      <div>
        <Link to={'/'} >
          <Button secondary>Back to recipes</Button>
        </Link>
        <h2>{name}</h2>
        <Link to={`/edit-recipe/${id}`}>
          <Button primary onClick={this.handleClick}>Edit recipe</Button>
        </Link>
        <ul>
          {this.renderIngredients()}
        </ul>
        <Button warning onClick={this.handleDeleteRecipe}>Delete recipe</Button>  
      </div>
    );
  }
}

export default connect(null, { deleteRecipe })(RecipeIngredients)
