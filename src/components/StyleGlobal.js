import { injectGlobal } from 'react-emotion';

export default injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    font-family: 'Roboto', sans-serif;
  }
  body {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: #F2F3EE;
    }
    ul > li {
      padding: 1rem;
      border-bottom: 1px solid #E6E7E2;
      color: #898989;
    }
  }
`;
