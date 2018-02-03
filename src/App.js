import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';

import RecipeList from './components/RecipeList';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <RecipeList />
        </Container>
      </div>
    );
  }
}

export default App;

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
