import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './components/StyleGlobal';
import { styles } from './App_style';
import { Container } from './components/StyledComponents';

import RecipeList from './components/RecipeList';
import RecipeIngredients from './components/RecipeIngredients';
import AddEditRecipe from './components/AddEditRecipe';
import { cachedRecipesToState } from './actions';

class App extends Component {
  componentDidMount() {
    //Retrive local storage if it exists
    const cachedRecipes = localStorage.getItem('cachedRecipes');
    //If local storage exists, update the current state with local storage state
    if (cachedRecipes) {
      this.props.cachedRecipesToState(cachedRecipes);
    }
  }

  render() {
    const { recipes } = this.props
    return (
      <div className={styles}>
        <h1>Recipe Box</h1>
        <Container>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path='/add-recipe' component={AddEditRecipe} />
              <Route
                path='/edit-recipe/:id'
                render={routeProps => (
                  <AddEditRecipe
                  {...routeProps}
                  recipe={recipes[routeProps.match.params.id]}
                  />
                )}
              />
              <Route
                path='/:id'
                //Pass React Router Route props to the component to render
                render={routeProps => (
                  <RecipeIngredients
                    {...routeProps}
                    recipe={recipes[routeProps.match.params.id]}
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

export default connect(mapStateToProps, { cachedRecipesToState })(App);
