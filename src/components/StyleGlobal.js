import { injectGlobal } from 'react-emotion';

export default injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    font-family: 'Roboto', sans-serif;
    color: #898989;
    font-size: 16px;
  }
  body a {
    text-decoration: none;
  }
  body h2 {
    color: #D68C83;
  }
`;
