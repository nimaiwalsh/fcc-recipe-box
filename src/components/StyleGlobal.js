import { injectGlobal } from 'react-emotion';

export default injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    font-family: 'Roboto', sans-serif;
  }
  body {
    a {
      text-decoration: none;
    }
  }
`;
