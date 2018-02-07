import React, { Component } from 'react';
import { Button } from './StyledComponents';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RecipeIngredients extends Component {
  handleClick() {
    console.log('clicked');
  }

  render() {
    const { name, ingredients } = this.props.recipe;
    return (
      <div>
        <Link to={'/'} >
          <div onClick={this.handleClick}>Back to recipes</div>
        </Link>
        <h1>{name}</h1>
        <Button onClick={this.handleClick}>Edit ingredients</Button>
        <ul>
          <li>{ingredients}</li>
        </ul>
      </div>
    );
  }
}

export default RecipeIngredients;
