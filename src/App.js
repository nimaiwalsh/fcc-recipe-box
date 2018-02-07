import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipeList from './components/RecipeList';
import RecipeIngredients from './components/RecipeIngredients';
import AddRecipe from './components/AddRecipe';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
        <Container>
          <BrowserRouter>
            <Switch>
              <Route path='/add-recipe' component={AddRecipe} />
              <Route
                path='/:id'
                //Pass React Router Route props to the component to render
                render={routeProps => (
                  <RecipeIngredients
                    {...routeProps}
                    recipe={this.props.recipes[routeProps.match.params.id]}
                  />
                )}
              />
              <Route path='/' component={RecipeList} />
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, null)(App);

injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    font-family: 'Roboto', sans-serif;
  };
`;

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
});
