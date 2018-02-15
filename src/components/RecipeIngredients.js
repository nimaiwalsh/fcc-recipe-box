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

  render() {
    const { name, ingredients } = this.props.recipe;

    return (
      <div>
        <Link to={'/'} >
          <Button>Back to recipes</Button>
        </Link>
        <h1>{name}</h1>
        <Button onClick={this.handleClick}>Edit ingredients</Button>
        <ul>
          <li>{ingredients}</li>
        </ul>
        <Button red onClick={this.handleDeleteRecipe}>Delete recipe</Button>  
      </div>
    );
  }
}

export default connect(null, { deleteRecipe })(RecipeIngredients)
